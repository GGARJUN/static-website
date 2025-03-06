"use client";;
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LayoutGrid = ({
  cards
}) => {
  const [selected, setSelected] = useState(null);
  const [lastSelected, setLastSelected] = useState(null);

  const handleClick = (card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    (<div
      className="w-full h-full 2xl:h-[1000px] grid grid-cols-1 md:grid-cols-3  mt-10 gap-4 relative 2xl:py-20 md:px-20 px-24 2xl:px-80">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            whileHover={{
              scale: 0.9, // Slight zoom effect
              rotate: 0, // Rotates 3 degrees on hover
              transition: {
                duration: 1.5,
                ease: "easeInOut",
                type: "spring",
                stiffness: 80,
              },
            }}
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden ",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-10 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                  ? "z-10 bg-white rounded-xl h-full w-full"
                  : "bg-white rounded-xl h-full w-full"
            )}
            layoutId={`card-${card.id}`}
          >
            {/* Gradient Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/90 to-black opacity-30 z-[5]"
              whileHover={{
                opacity: 0.6, // Fades in the gradient on hover
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
            />

            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <ImageComponent card={card} />
          </motion.div>

        </div>
      ))
      }
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-0",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }} />
    </div >)
  );
};

const ImageComponent = ({
  card
}) => {
  return (
    (
      <div className="">
        <motion.img
          layoutId={`image-${card.id}-image`}
          src={card.thumbnail}
          height="500"
          width="500"
          className={cn(
            "object-cover object-top absolute inset-0 h-full w-full transition duration-200"
          )}
          alt="thumbnail" />

      </div>
    )
  );
};

const SelectedCard = ({
  selected
}) => {
  return (
    (<div
      className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-0" />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-[70]">
        {selected?.content}
      </motion.div>
    </div>)
  );
};
