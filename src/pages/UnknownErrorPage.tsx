import { Helmet } from 'react-helmet-async';
import { v4 } from 'uuid';

import { Typography } from '~/components/index.ts';
import { EMAILS } from '~/constants/appConstants.ts';

interface Props {
  message?: string;
  stackTrace?: string;
}

function UnknownErrorPage({ message, stackTrace }: Props) {
  const isDev = import.meta.env.DEV;

  const copyDateTime = () => {
    const dateTime = new Date().toLocaleString();
    navigator.clipboard.writeText(dateTime);
  };

  return (
    <div className="[&,&>div]:flex [&,&>div]:flex-col [&,&>div]:items-center [&,&>div]:justify-center gap-6 p-4">
      <Typography variant="h5" className="max-w-[1000px]">
        An unknown error occurred. Please try again later or contact administrators about the issue.
      </Typography>
      <ContactList />
      <Typography className="max-w-[600px] text-center inline-block">
        (Please include the{' '}
        <Typography component="strong" copyable className="inline-block">
          error message
        </Typography>{' '}
        below, current{' '}
        <Typography component="strong" copyable onClick={copyDateTime} className="inline-block">
          date and time
        </Typography>
        , <strong>how did you get the issue</strong> when contacting administrators.)
      </Typography>
      <div>
        <Typography variant="h6" className="max-w-[1000px] text-justify">
          Error: {message}
        </Typography>
        {isDev && (
          <Typography variant="h6" className="max-w-[1000px] text-center">
            {stackTrace}
          </Typography>
        )}
      </div>
      <Helmet>
        <title>Comic</title>
      </Helmet>
    </div>
  );
}

export default UnknownErrorPage;

const contacts = [{ label: 'Helper email', value: EMAILS.HELPER }];

function ContactList() {
  return (
    <table className="[&>*>*:last-child]:text-primary-500 [&>*>*:last-child]:font-semibold [&_td]:max-w-48 text-text-primary">
      {contacts.map(({ label, value }) => (
        <tr key={v4()}>
          <Typography component="td" className="pr-2 text-end">
            {label}:
          </Typography>
          <Typography copyable component="td">
            <strong>{value}</strong>
          </Typography>
        </tr>
      ))}
    </table>
  );
}
