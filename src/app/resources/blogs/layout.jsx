export const metadata = {
    title: "Blogs",
    description: "Get a better understanding of your traffic.",
    icons: {
        icon: '/Logo/SunKey-Design-Systems-Favicon.ico', // Using ICO format
      },
  };

export default function RootLayout({ children }) {
    return (
        <>
            {children}
        </>
    );
}