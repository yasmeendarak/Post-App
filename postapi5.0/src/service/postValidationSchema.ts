import { Schema } from 'express-validator'

const postValidationSchema: Schema = {
  title: {
    isEmpty: {
      negated: true,
      errorMessage: 'Title is required',
    },
    custom: {
      options: (value: string, { req }) => {
        if (!value) {
          return true;
        }

        return value.length >= 10;
      },
      errorMessage: 'Title should be at least 10 characters long',
    },
  },
  author: {
    notEmpty: {
      negated: true,
      errorMessage: 'Author is required',
    },
  },
  content: {
    notEmpty: {
      negated: true,
      errorMessage: 'Content is required',
    },
  },
  category: {
    notEmpty: {
      negated: true,
      errorMessage: 'Category is required',
    },
  },
  subcategory: {
    notEmpty: {
      negated: true,
      errorMessage: 'subcategory is required',
    },
    custom: {
      options: (subcategory: string, { req }) => {
        const category = req.body.category;
        const validSubcategories: Record<string, string[]> = {
          Houses: ['For Rent', 'For Sale'],
          Cars: ['For Rent', 'For Sale'],
        };

        if (category && !validSubcategories.hasOwnProperty(category)) {
          throw new Error(`Invalid category "${category}". Valid categories are: ${Object.keys(validSubcategories).join(', ')}`);
        }

        if (validSubcategories[category] && !validSubcategories[category].includes(subcategory)) {
          throw new Error(`Invalid subcategory for the selected category. Valid subcategories for "${category}" are: ${validSubcategories[category].join(', ')}`);
        }

        return true;
      },
    },
  },
}

module.exports = postValidationSchema;
