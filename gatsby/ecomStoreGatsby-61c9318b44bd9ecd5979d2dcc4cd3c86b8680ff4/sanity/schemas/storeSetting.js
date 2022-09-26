import { MdStore as icon } from 'react-icons/md';

export default {
  name: 'storeSettings',
  title: 'Settings',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Store Name',
      type: 'string',
      description: 'Name von dem Geschäft',
    },
    {
      name: 'bestseller',
      title: 'Bestseller Items',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'ceramic' }] }],
    },
    {
      name: 'newItems',
      title: 'New Items',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'ceramic' }] }],
    },
  ],
};
