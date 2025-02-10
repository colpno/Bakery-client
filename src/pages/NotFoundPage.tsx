import { Helmet } from 'react-helmet-async';
import { ErrorResponse, useNavigate } from 'react-router-dom';

import Image from '~/components/Image.tsx';
import { Button, Typography } from '~/components/index.ts';
import { EMAILS } from '~/constants/appConstants.ts';
import { ROUTE_HOME } from '~/constants/routeConstants.ts';
import { noDataSVG } from '~/images/index.ts';

interface Props {
  error?: ErrorResponse;
  title?: string;
}

function NotFoundPage({ error, title = 'Uh oh! You got lost.' }: Props) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex flex-col items-center justify-center flex-1 px-2 space-y-3 -translate-y-8 pt-header md:pt-header-md">
        <Image src={noDataSVG} alt="Page not found" className="mt-4" />
        <Typography variant="h2">{title}</Typography>
        <div className="space-x-2 !mb-4">
          <Button href={ROUTE_HOME}>Go to home</Button>
          <Button onClick={() => navigate(-1)}>Go back</Button>
        </div>
        <Typography variant="body2" className="text-center">
          If you have any questions, please contact us via{' '}
          <Typography component="span" copyable>
            {EMAILS.HELPER}
          </Typography>
          .
        </Typography>
        {error && (
          <div className="max-w-[400px]">
            <Typography variant="h6" className="line-clamp-1">
              {error.status}, {error.statusText}:
            </Typography>
            <Typography>{error.data}</Typography>
          </div>
        )}
        <Helmet>
          <title>404 - Comic</title>
        </Helmet>
      </main>
    </div>
  );
}

export default NotFoundPage;
