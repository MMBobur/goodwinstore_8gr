import React from 'react';
import Home from '../containers/Home';

export const routes = [
  {
    element: <Home />,
    children: [
      { index: true, element: <Home /> },
    ],
  },
];
