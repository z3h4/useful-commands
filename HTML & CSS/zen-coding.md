## Create a list with values

```HTML
ul>li*5{Item $}
```

This will produce the following HTML snippet

```HTML
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
  <li>Item 5</li>
</ul>
```

## Create 3 headings with values

```HTML
h${Heading $}*3
```

This will produce the following HTML snippet

```HTML
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
```

## Create an input of type number

```HTML
div.mb-3>label.form-label+input[type=number].form-control
```

This will produce the following HTML snippet

```HTML
<div className="mb-3">
  <label htmlFor="" className="form-label"></label>
  <input type="number" className="form-control" />
</div>
```
