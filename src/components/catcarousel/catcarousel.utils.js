import React, { useState, useEffect } from 'react';

export const useGetOtherCategories = (catid) => {
    const [othercategories, setResponse] = useState("");
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const res = await fetch(`http://localhost:4000/api/categories?currentcat=${catid}`);
          const json = await res.json();
          setResponse(json);
          setIsLoading(false);
        } catch (error) {
          setError(error);
          setIsLoading(false);
        }
      };
      fetchData();
    }, []);

    return { othercategories, error, isLoading };
};