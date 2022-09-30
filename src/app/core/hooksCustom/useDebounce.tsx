import { useState, useEffect } from "react";

function useDebounce(value: string, delay: number) {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const hadleTimeout = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(hadleTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  return debounceValue;
}

export default useDebounce;
