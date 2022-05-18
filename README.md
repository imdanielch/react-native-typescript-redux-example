# Architectural pattern

## Folder structure

```text
├─ android/                      - android specific files
├─ ios/                          - ios specific files
├─ metro.config.js              - react-native bundler config
├─ tsconfig.json                - typescript compiler config
├─ package.json                 - package config
├─ package-lock.json            - version lock dependencies
├─ .gitignore                   - files or directories to ignore for git
├─ .eslintrc.js                 - javascript code analysis config
├─ .prettierrc.js               - auto-formatter config
├─ babel.config.js              - babel transcompiler config
├─ index.js                     - Project entrypoint
└─  src/                        - holds all application files
   ├─ App.tsx                   - App top level component
   ├─ app.json                  - App configuration data not part of code (used by index.js)
   ├─ app/                      - Directory holding App wide functions
   │  ├─ hooks.ts                - Redux hook functions to minimize boilerplate
   │  ├─ rootReducer.ts          - Redux combine all reducers
   │  └─ store.ts                - Redux store configuration
   └─ features/                  - All feature components reside here
      └─ counter/                - A feature component
         ├─ Counter.tsx          - Container/Parent Component (View Controller)
         ├─ CounterView.tsx      - View/Child Component (View)
         ├─ counterAPI.ts        - API calls used by the component (Web APIs, async calls)
         ├─ counterSlice.spec.ts - Component tests to be run by Jest
         └─ counterSlice.ts      - Redux (VM,M) config for the component
```

## Style Guide

Basically following [Redux Style Guide](https://redux.js.org/style-guide/)

Consider splitting the Component into parent component and child components. Where the parent component becomes a `container` (View Controller) which digests the store and deals with logic, while the child component focuses only on the display (view)

Whenever adding a component, `src/app/rootReducer.ts` will need to be updated with the new reducer
