# react-ext-hooks

It is a library of React hooks that extends its capabilities.

![react ext hooks set](https://aptukov.com/third_party_assets/react-ext-hooks/logo.png) 

## Content:

[Install](#install)

[Usage](#usage)

***Store hooks:***

[ useLocalStorage() 🪝](#uselocalstorage)

[ useSessionStorage() 🪝](#usesessionstorage)

***Render hook:***

[ useReRender() 🪝](#usererender)

***Other:***

[ Examples in CodeSandbox ](#other)



## Install

**npm**:

```bash
npm i react-ext-hooks
```

**yarn**:

```bash
yarn add react-ext-hooks
```

### Import

To import all the hooks, use:

```typescript
import {
  useLocalStorage,
  useSessionStorage,
  useReRender,
} from "react-ext-hooks";
```

...or you can import only the ones you need.

### Usage

## useLocalStorage

#### 🪝🪝🪝 Description 💁

**useLocalStorage** is a hook for React that allows you to write to local storage data in the format of simple types or your objects. The hook also allows you to read data from local storage and causes the component to re-render when the data in local storage changes. In case there is no data in the local storage, the hook will write and return the default value you specify.

#### API 🚩
**useLocalStorage<T>(key: string, defaultValue?:T, options?:Options)**

Returns **[value, setValue]** when called. The return values work similarly to their counterparts in setState() hook.

**key: string**
Key for identifying the value to be stored.

**defaultValue?: T**
Default value. The argument is optional, but it is better to specify it in case the value is absent in the storage.
Values of type object pass serialization on writing (default JSON.stringify()) and parsing on reading (default JSON.parse()).

**options?: Options**
Optional argument, has the following properties:
```typescript
options: {
    syncData?: boolean,
    serializer?: function,
    parser?: function,
    logger?: function,
};
```

**syncData?: boolean**
Allows you to synchronize value change events between different hook instances. The default value is true.

**serializer?: function**
Allows you to specify your serializer function instead of the default. The default function is JSON.stringify.

**parser?: function**
Allows you to specify your parser function instead of the default. The default function is JSON.parse.

**logger?: function**
Allows you to specify your own error logging function instead of the default. The default function is console.log.
#### Example ✏

The most basic use of a hook involves calling the hook function with one parameter - the name of the local storage key. However, it is recommended to use it with a second parameter - the default value:

```typescript
//local-storage-input.js file:
import {useLocalStorage} from  "react-ext-hooks";

export function LocalStorageInput() {
  const [value, setValue] = useLocalStorage("example1", "Default text");
  return (
    <>
      <div>The text bellow is stored in Local Storage:</div>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </>
  );
};

//add to usage file:
<LocalStorageInput />
```
#### Features ✅
✓ Built-in work with different data, including objects 

✓ Support SSR

✓ Synchronization between all hook calls when data changes

✓ Written with TypeScript

## useSessionStorage

#### 🪝🪝🪝 Description 💁

**useSessionStorage** is a hook for React that allows you to write to session storage data in the format of simple types or your objects. The hook also allows you to read data from session storage and causes the component to re-render when the data in session storage changes. In case there is no data in the session storage, the hook will write and return the default value you specify.

#### API 🚩
**useSessionStorage<T>(key: string, defaultValue?:T, options?:Options)**

Returns **[value, setValue]** when called. The return values work similarly to their counterparts in setState() hook.

**key: string**
Key for identifying the value to be stored.

**defaultValue?: T**
Default value. The argument is optional, but it is better to specify it in case the value is absent in the storage.
Values of type object pass serialization on writing (default JSON.stringify()) and parsing on reading (default JSON.parse()).

**options?: Options**
Optional argument, has the following properties:
```typescript
options: {
    syncData?: boolean,
    serializer?: function,
    parser?: function,
    logger?: function,
};
```

**syncData?: boolean**
Allows you to synchronize value change events between different hook instances. The default value is true.

**serializer?: function**
Allows you to specify your serializer function instead of the default. The default function is JSON.stringify.

**parser?: function**
Allows you to specify your parser function instead of the default. The default function is JSON.parse.

**logger?: function**
Allows you to specify your own error logging function instead of the default. The default function is console.log.
#### Example ✏

The most basic use of a hook involves calling the hook function with one parameter - the name of the session storage key. However, it is recommended to use it with a second parameter - the default value:

```typescript
//session-storage-input.js file:
import {useSessionStorage} from  "react-ext-hooks";

export function SessionStorageInput() {
  const [value, setValue] = useSessionStorage("example1", "Default text");
  return (
    <>
      <div>The text bellow is stored in Session Storage:</div>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </>
  );
};

//add to usage file:
<SessionStorageInput />
```
#### Features ✅
✓ Built-in work with different data, including objects 

✓ Support SSR

✓ Synchronization between all hook calls when data changes

✓ Written with TypeScript


## useReRender 

#### 🪝🪝🪝 Description 💁

**useReRender** this is a very simple hook that returns a function that, when called, re-renders the component in which the hook is declared. 

#### API 🚩
**useReRender()**

Returns **callReRender** function when called. You need to call this function when you need to rerender **callReRender()**.


#### Example ✏

```typescript
//rerender-tesp-panel.js file:
import {useReRender} from  "react-ext-hooks";

export function ReRenderTestPanel() {
  const callReRender = useReRender();
  const renderCount = useRef(0);
  useEffect(function onReRender() {
    renderCount.current++;
  });
  return (
    <div>
      <div className="re_render_panel">
        <div>Current render count: {renderCount.current}</div>
        <button onClick={() => callReRender()}>Call render</button>
      </div>
    </div>
  );
};

//add to usage file:
<ReRenderTestPanel />
```
#### Features ✅

✓ Support SSR

✓ Written with TypeScript

## Other 
### 🔥 All the examples of usage **react-ext-hooks** are in the [sandbox](https://codesandbox.io/p/sandbox/uselocalstorage-example-sjgv3p?file=%2Fpackage.json&layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clycszphg00062069x5dewumi%2522%252C%2522sizes%2522%253A%255B100%252C0%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clycszphg00022069pemmgch8%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clycszphg00032069grzm3c3q%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clycszphg00052069cr2f6btf%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clycszphg00022069pemmgch8%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clycszphg000120695etoapxb%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252Findex.js%2522%252C%2522state%2522%253A%2522IDLE%2522%252C%2522initialSelections%2522%253A%255B%257B%2522startLineNumber%2522%253A46%252C%2522startColumn%2522%253A26%252C%2522endLineNumber%2522%253A46%252C%2522endColumn%2522%253A26%257D%255D%257D%252C%257B%2522id%2522%253A%2522clyd3zjkc000220692hrvc8j7%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fpackage.json%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522id%2522%253A%2522clycszphg00022069pemmgch8%2522%252C%2522activeTabId%2522%253A%2522clyd3zjkc000220692hrvc8j7%2522%257D%252C%2522clycszphg00052069cr2f6btf%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clycszphg000420693izfd20d%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522id%2522%253A%2522clycszphg00052069cr2f6btf%2522%252C%2522activeTabId%2522%253A%2522clycszphg000420693izfd20d%2522%257D%252C%2522clycszphg00032069grzm3c3q%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522clycszphg00032069grzm3c3q%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D).
