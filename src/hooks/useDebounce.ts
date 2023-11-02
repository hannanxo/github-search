/*
This hook takes an input value that is the search query and a delay number as params.
It returns a debounced version of the input value (which is a state). When the input 
value changes, it sets up a timeout to update the debounced value after the specified delay.
If the input value changes again within the delay period, the previous timeout is cleared, 
and a new timeout is set, effectively debouncing the input.
*/
import { useEffect, useState } from "react";

export default function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
