import useStorage, {Options, Setter, StorageName} from "./common/use-storages.js";
function useLocalStorage<T>(
    key: string,
    defaultValue: T,
    options?: Options<T>
  ): [T, Setter<T>];
  function useLocalStorage<T>(
    key: string,
    defaultValue?: T,
    options?: Options<T>
  ) {
 return useStorage(StorageName.localStorage, key, defaultValue, options) ;
};
export default useLocalStorage;