# Interface

- Using an interface we can define the shape or the interface of an object.

```Javascript
interface Props {
  items: string[];
  heading: string;
  count: number;
  onSelectItem: (item: string) => void;
  children: string;   // if the children does not contain any HTML component
    //or
  children: ReactNode;    // if the children contains HTML component
}
```
