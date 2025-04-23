import { useRef } from "react";

export type AnyFunction = (...args: any[]) => void;

export type DebouncedFunction<T extends AnyFunction> = (
  ...args: Parameters<T>
) => void;

export type UseDebounce = <T extends AnyFunction>(
  fn: T,
  delay: number
) => DebouncedFunction<T>;

const useDebounce: UseDebounce = (fn, delay) => {
  const timeoutRef = useRef<number | null>(null);

  function debounceFn(...args: Parameters<typeof fn>) {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      fn(...args);
    }, delay);
  }

  return debounceFn;
};

export default useDebounce;
