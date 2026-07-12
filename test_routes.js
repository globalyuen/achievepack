import { matchRoutes } from 'react-router-dom';

const routes = [
  {
    path: '/',
    children: [
      { path: '/', element: 'home' },
      { path: '/products/custom-printed-corrugated-boxes', element: 'boxes' },
      { path: '*', element: 'wildcard' }
    ]
  }
];

const match = matchRoutes(routes, '/products/custom-printed-corrugated-boxes');
console.log(match);
