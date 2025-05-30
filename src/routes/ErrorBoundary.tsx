import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

import { NotFoundPage, OfflineErrorPage, UnknownErrorPage } from '~/pages/index.ts';

function ErrorBoundary() {
  const error = useRouteError();
  const { onLine } = window.navigator;
  const isDev = import.meta.env.DEV;
  let errorMessage = 'Unknown error';
  let stackTrace: string | undefined;

  if (isRouteErrorResponse(error)) return <NotFoundPage error={error} />;

  if (onLine === false) return <OfflineErrorPage />;

  if (error instanceof Error) {
    errorMessage = error.message;
    stackTrace = error.stack;
  }

  if (typeof error === 'string') {
    errorMessage = error;
  }

  return <UnknownErrorPage message={errorMessage} stackTrace={isDev ? stackTrace : undefined} />;
}

export default ErrorBoundary;
