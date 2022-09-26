import React from 'react';
import S from '@sanity/desk-tool/structure-builder';
import { MdDescription as icon } from 'react-icons/md';

// build a custom sidebar

function sidebar() {
  return S.list()
    .title('Machua Peru')
    .items([
      // make a new sub item
      S.listItem()
        .title('Home Page')
        .icon(() => <strong>{icon}</strong>)
        .child(
          // create an editor
          S.editor()
            .schemaType('storeSettings')
            // make a new document id so we dont have a random string
            .documentId('downtown')
        ),
      // ad in the rest of our document items
      ...S.documentTypeListItems().filter(
        // and filter storesettings out
        (item) => item.getId() !== 'storeSettings'
      ),
    ]);
}

export default sidebar;
