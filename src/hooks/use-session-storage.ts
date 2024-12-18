import useStorage, {Options, Setter, StorageName} from "./common/use-storages.js";
function useSessionStorage<T>(
    key: string,
    defaultValue: T,
    options?: Options<T>
  ): [T, Setter<T>];
  function useSessionStorage<T>(
    key: string,
    defaultValue?: T,
    options?: Options<T>
  ) {
 return useStorage(StorageName.sessionStorage, key, defaultValue, options);
};
export default useSessionStorage;