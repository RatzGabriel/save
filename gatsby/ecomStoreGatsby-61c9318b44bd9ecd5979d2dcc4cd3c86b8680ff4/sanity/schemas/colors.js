import React from 'react';
import { AiOutlineBgColors as icon } from 'react-icons/ai';

export default {
  name: 'farben',
  title: 'Farben',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Farben Name',
      type: 'string',
      description: 'Name der Farbe?',
    },
  ],
};
