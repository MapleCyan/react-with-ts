import axios from 'axios';
import { useState, useEffect } from 'react';

const useUrlLoader = (url: string, deps: any[] = []) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios.get(url).then(result => {
      setData(result.data);
      setLoading(false);
    });
    // eslint-disable-next-line
  }, deps);
  return [data, loading];
};

export default useUrlLoader;
