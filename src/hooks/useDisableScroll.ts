import { useEffect } from 'react';

const useDisableScroll = () => {
  useEffect(() => {
    const originalOverflow = document.body.style.overflowY;

    // Disable scroll behavior
    document.body.style.overflowY = 'hidden';

    return () => {
      // Re-enable scroll behavior when component unmounts
      document.body.style.overflowY = originalOverflow || 'unset';
    };
  }, []);
};

export default useDisableScroll;
