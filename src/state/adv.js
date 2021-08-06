import { useEffect, useState } from "react";
import { fetchAdv } from '../services/listAPI';

export const useAdv = (paging) => {
  
  const [loading, setLoading] = useState(true);
  const[adventurers, setAdventurers] = useState([]);

  useEffect(() => {
    fetchAdv(page)
    .then(setAdventurers)
    .finally(() => setLoading(false));
  }, [paging]);

  return { adventurers, loading };
};
