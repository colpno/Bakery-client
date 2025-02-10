import { lazy } from 'react';

export const NotFoundPage = lazy(() => import('./NotFoundPage.tsx'));
export const OfflineErrorPage = lazy(() => import('./OfflineErrorPage.tsx'));
export const UnknownErrorPage = lazy(() => import('./UnknownErrorPage.tsx'));
export const HomePage = lazy(() => import('./HomePage.tsx'));
