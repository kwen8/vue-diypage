export const homeRouter = {
  redirect: '/admin',
  path: '/',
  name: 'home',
  component: () => import('@/pages/home/Home')
};

export const adminRouters = [
  {
    path: '/admin',
    component: () => import('@/pages/admin/Admin'),
    children: [
      {
        name: 'admin_page_list',
        path: '/',
        component: () => import('@/pages/admin/diypage/PageList')
      },
      {
        name: 'admin_renovate',
        path: 'renovate',
        component: () => import('@/pages/admin/diypage/Renovate')
      }
    ]
  }
];

export default [homeRouter, ...adminRouters];
