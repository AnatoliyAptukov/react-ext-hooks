import { useEffect, useMemo, useRef, useState } from "react";

enum StorageName { localStorage, sessionStorage };

type Serializer<T> = (object: T | undefined) => string;
type Parser<T> = (val: string) => T | undefined;
type Setter<T> = React.Dispatch<React.SetStateAction<T | undefined>>;

type Options<T> = Partial<{
  serializer: Serializer<T>;
  parser: Parser<T>;
  logger: (error: any) => void;
  syncData: boolean;
}>;

function useStorage<T>(
  storage: StorageName,
  key: string,
  defaultValue: T,
  options?: Options<T>
): [T, Setter<T>];
function useStorage<T>(
  storage: StorageName,
  key: string,
  defaultValue?: T,
  options?: Options<T>
) {
  const getDefaultOptions = useMemo(() => {
    return {
      serializer: JSON.stringify,
      parser: JSON.parse,
      logger: console.log,
      syncData: true,
      ...options,
    };
  }, [options]);

  const getStorage = () => {
    return (storage === StorageName.localStorage ? window.localStorage : window.sessionStorage);
  }

  const { serializer, parser, logger, syncData } = getDefaultOptions;

  const rawValueRef = useRef<string | null>(null);

  const [value, setValue] = useState(() => {
    if (typeof window === "undefined") return defaultValue;

    try {
      rawValueRef.current = getStorage().getItem(key);
      const res: T = rawValueRef.current
        ? parser(rawValueRef.current)
        : defaultValue;
      return res;
    } catch (e) {
      logger(e);
      return defaultValue;
    }
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateStorage = () => {
      if (value !== undefined) {
        const newValue = serializer(value);
        const oldValue = rawValueRef.current;
        rawValueRef.current = newValue;
        getStorage().setItem(key, newValue);
        window.dispatchEvent(
          new StorageEvent("storage", {
            storageArea: getStorage(),
            url: window.location.href,
            key,
            newValue,
            oldValue,
          })
        );
      } else {
        getStorage().removeItem(key);
        window.dispatchEvent(
          new StorageEvent("storage", {
            storageArea: getStorage(),
            url: window.location.href,
            key,
          })
        );
      }
    };

    try {
      updateStorage();
    } catch (e) {
      logger(e);
    }
  }, [value]);

  useEffect(() => {
    if (!syncData) return;

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key !== key || e.storageArea !== getStorage()) return;

      try {
        if (e.newValue !== rawValueRef.current) {
          rawValueRef.current = e.newValue;
          setValue(e.newValue ? parser(e.newValue) : undefined);
        }
      } catch (e) {
        logger(e);
      }
    };

    if (typeof window === "undefined") return;

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [key, syncData]);

  return [value, setValue];
}

export default useStorage;
export {Options, Setter, StorageName};