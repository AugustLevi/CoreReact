import React from 'react';
const TestCode = React.lazy(() => import('./views/menus/testCode/TestCode'));
const NewMenu = React.lazy(() => import('./views/menus/newMenu/NewMenu'));
const MainMenu = React.lazy(() => import('./views/menus/Home/MainMenu'));
const Result = React.lazy(() => import('./views/menus/Home/result'));
const LogoutReact = React.lazy(()=>import('./views/menus/logoutform/logoutReact'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/menus/TestCode', name: 'TestCode', component: TestCode },
  { path: `/menus/NewMenu`, name: 'NewMenu', component: NewMenu},
  { path: `/menus/MainMenu`, name: 'Home1', component: MainMenu},
  { path: `/menus/Result`, name: 'Result', component: Result},
  { path: `/menus/Logout`, name: 'Logout', component: LogoutReact},
];

export default routes;



