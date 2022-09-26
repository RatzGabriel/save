import React from 'react';

export const navigationRef = React.createRef();

const navigate = (name, props) => navigationRef.current?.navigate(name, props);

export default {
  navigate,
};
