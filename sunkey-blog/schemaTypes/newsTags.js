import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'newsTag', // Singular for consistency
  title: 'News Tag',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(), // Ensure the title is required
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title', // Automatically generates a slug from the title
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.max(200), // Limits description length
    }),
  ],
});
