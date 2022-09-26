import React from 'react';
import PriceInput from '../components/PriceInput';

import { GiTeapotLeaves as icon } from 'react-icons/gi';
export default {
  name: 'ceramic',
  title: 'Ceramic',
  type: 'document',

  icon,
  fields: [
    {
      name: 'name',
      title: 'Ceramic Name',
      type: 'string',
      description: 'Name of the ceramic item',
    },
    {
      name: 'beschreibung',
      title: 'Beschreibung',
      type: 'string',
      description: 'Beschreibung Text',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'imageGallery',
      title: 'image Gallery ',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          title: 'Image',
        },
      ],
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      inputComponent: PriceInput,
      description: 'Price of the item in cents',
      validation: (Rule) => Rule.min(500).max(50000),
    },
    {
      name: 'eigenschaften',
      title: 'Eigenschaften',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'eigenschaften' }] }],
    },
    {
      name: 'farben',
      title: 'Farben',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'farben' }] }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      eigenschaften0: 'eigenschaften.0.name',
      eigenschaften1: 'eigenschaften.1.name',
      eigenschaften2: 'eigenschaften.2.name',
      eigenschaften3: 'eigenschaften.3.name',
    },
    prepare: ({ title, media, ...eigenschaften }) => {
      const eig = Object.values(eigenschaften).filter(Boolean);
      return {
        title: title,
        media,
        subtitle: eig.join(', '),
      };
    },
  },
};
