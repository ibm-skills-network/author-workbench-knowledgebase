import { useEffect } from 'react';

export default function NotFoundContent() {
  useEffect(() => {
    window.location.replace('/docs/');
  }, []);

  return null;
}
