// src/configs/routes.config/sharedRoutes.ts
import { lazy } from 'react';
import type { Routes } from '@/@types/routes';

const sharedRoutes: Routes = [
    {
        key: 'homePage',
        path: '/home',
        component: lazy(() => import('@/views/Home')),
        authority: [],
    },
    {
        key: 'aboutPage',
        path: '/about',
        component: lazy(() => import('@/views/About')),
        authority: [],
    },
    // Add more shared routes here as needed
];

export default sharedRoutes;
