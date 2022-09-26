import React from 'react';
import { AiOutlineBgColors as icon } from 'react-icons/ai';

export default {
  name: 'banner',
  title: 'BannerText',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Banner Text',
      type: 'string',
      description: 'Banner Text',
    },
  ],
};
