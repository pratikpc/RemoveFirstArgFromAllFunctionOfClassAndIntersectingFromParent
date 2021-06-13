# removefirstargfromallfunctionofclassandintersectingfromparent

This is a TypeScript package  
Remove the first arg from every function of the given class.  
Also remove all parent class (including those present in child class) Functions

## Usage

### Install

```sh
npm install @pratikpc/removefirstargfromallfunctionofclassandintersectingfromparent --save
```

### Usage

```typescript
import removefirstargfromallfunctionofclassandintersectingfromparent from "@pratikpc/removefirstargfromallfunctionofclassandintersectingfromparent";

function X(): removefirstargfromallfunctionofclassandintersectingfromparent<
  Parent,
  Child
> {}
```

## Note

This only changes the return type.  
Change functions yourself
