# Philadelphia Qualified Voter Listing 2018


## Project Tech Stack
* React & Typescript for the ui library
* Vite for the build tooling
* SWR for all get api functions (serves as a cache)
* Zustand for state mangement
* Axios for api calls

## Functional Programming > Object Oriented
* We prefer to keep code clean and simple
* Write in functions
* Fail / Eject early 
* Have ui's for various states i.e. loading

## How to contribute
* Currently there is no routing library so we would probably need to add one to add routes in the future
* Router would be placed in App.tsx
* All files should be in typescript - .ts or .tsx for react files
* Import react into all files so jest doesn't complain
* Create a folder for each page - create a page file and index.ts and export as default
* Follow a single function design principle aka each file should really only do one thing (maybe 2-3 at most)
* Follow DRY principles and abstract reusable logic into a utils / hooks / component folder/file
* Create swr hooks for any get api
* Create a use{insert page name}.ts file for any zustand state mangement
* Follow a flux pattern for state management


## How to run
* Install and use Node 16 or greater - use nvm if it's not already setup
* yarn dev to run in dev mode
* yarn test to run tests


