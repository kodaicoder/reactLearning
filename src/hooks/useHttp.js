import { useCallback, useState } from "react";

export const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendHttpRequest = useCallback(
    async (httpRequestConfig, callBackFunction) => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(httpRequestConfig.url, {
          method: httpRequestConfig.method ? httpRequestConfig.method : "GET",
          headers: httpRequestConfig.headers ? httpRequestConfig.headers : {},
          body: httpRequestConfig.body
            ? JSON.stringify(httpRequestConfig.body)
            : null,
        });

        if (!response.ok) {
          throw new Error("Request failed!");
        }

        const data = await response.json();

        callBackFunction(data);
      } catch (err) {
        setError(err.message || "Something went wrong!");
      }
      setIsLoading(false);
    },
    []
  );

  return { isLoading, error, sendHttpRequest };
};
