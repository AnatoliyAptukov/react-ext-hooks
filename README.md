# react-ext-hooks
It is a library of React hooks that extends its capabilities.

![react ext hooks set](http://aptukov.com/third_party_assets/react-ext-hooks/logo.png)

## Install

npm:
```bash
npm i react-ext-hooks
```
yarn:
```bash
yarn add react-ext-hooks
```

## Usage

```typescript
import {useLocalStorage, useSessionStorage, useReRender} from  "react-ext-hooks";

export default function Todos() {
    const [todos, setTodos] = useSessionStorageState('todos', {
        defaultValue: ['buy avocado', 'do 50 push-ups']
    })
}
```