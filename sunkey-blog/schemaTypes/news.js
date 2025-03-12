import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'news',
  title: 'News',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(), // Title is required
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(), // Ensure description is provided
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }], // Corrected array format
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'newsTags', // Fixed name consistency
      title: 'News Tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'newsTag' }] }], // Corrected reference
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
      tags: 'newsTags',
    },
    prepare({ title, author, media, tags }) {
      const tagNames = tags?.map(tag => tag.title).join(', ') || 'No tags';
      return {
        title,
        subtitle: author ? `by ${author} | Tags: ${tagNames}` : `Tags: ${tagNames}`,
        media,
      };
    },
  },
});
