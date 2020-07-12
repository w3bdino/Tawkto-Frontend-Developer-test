import React, { useState, useEffect } from 'react';

export const useGetCategoryDetail = (slug) => {
    const [catdetail, setResponse] = useState("");
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const res = await fetch(`http://localhost:4000/api/category/${slug}`);
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

    return { catdetail, error, isLoading };
};