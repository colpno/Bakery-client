import { ImgHTMLAttributes, memo, useState } from 'react';

import { PlaceholderImage } from './index.ts';

function Image({
  loading = 'lazy',
  decoding = 'async',
  ...imgProps
}: ImgHTMLAttributes<HTMLImageElement>) {
  const [error, setError] = useState(false);

  if (error) {
    return <PlaceholderImage />;
  }

  return <img {...imgProps} loading={loading} decoding={decoding} onError={() => setError(true)} />;
}

export default memo(Image);
