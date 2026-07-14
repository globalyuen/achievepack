const { matchRoutes } = require('react-router-dom');

const routes = [
  {
    path: "/",
    children: [
      { path: "/products/custom-printed-corrugated-boxes" },
      { path: "*" }
    ]
  }
];

const match1 = matchRoutes(routes, "/products/custom-printed-corrugated-boxes");
console.log("Match 1:", match1 ? match1.map(m => m.route.path) : "null");

const routesWithStar = [
  {
    path: "/*",
    children: [
      { path: "/products/custom-printed-corrugated-boxes" },
      { path: "*" }
    ]
  }
];

const match2 = matchRoutes(routesWithStar, "/products/custom-printed-corrugated-boxes");
console.log("Match 2:", match2 ? match2.map(m => m.route.path) : "null");
