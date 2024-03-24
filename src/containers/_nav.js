export default [

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Menu',
    route: '/menus',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Test Code',
        to: '/menus/TestCode',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'New Menu',
        to: '/menus/NewMenu',
      },
    ]
  },
  {
        _tag: 'CSidebarNavItem',
        name: 'Login',
        to: '/login',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Home',
    to: `/menus/Home`,
    icon: 'cil-home',
 },
 {
  _tag: 'CSidebarNavItem',
  name: 'Logout',
  to: '/menus/Logout',
  icon: 'cil-puzzle',
},
  
]


