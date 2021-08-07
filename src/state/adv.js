import { useEffect, useState } from "react";
import { fetchAllAdv, fetchOneAdv } from '../services/listAPI';

export const advDetails = (id) => {
  
  const [loading, setLoading] = useState(true);
  const [details, setAdvDetails] = useState(null);

  useEffect(() => {
    fetchOneAdv(id)
    .then(setAdvDetails)
    .finally(() => setLoading(false));
  }, [id]);

  return { details, loading };
};

export const listAdv = (page) => {
  
  const [loading, setLoading] = useState(true);
  const [adventurers, setAdventurers] = useState([]);

  useEffect(() => {
    fetchAllAdv(page)
    .then(setAdventurers)
    .finally(() => setLoading(false));
  }, [page]);

  return { adventurers, loading };
};

export const removeAdv = (id) => {

}

