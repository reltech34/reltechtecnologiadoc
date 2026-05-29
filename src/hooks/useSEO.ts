
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { updateSEO } from '../utils/seo';

export const useSEO = () => {
  const location = useLocation();

  useEffect(() => {
    updateSEO(location.pathname);
  }, [location.pathname]);
};
