# CSS

- CSS (Cascading Stylesheets) are used for styling web pages.
- CSS is all about aesthetics and visual effects.
- With CSS we can also create beautiful animations.

### Embedding CSS into HTML

- CSS styles can be embedded in an HTML document, written in a separate file (as an external stylesheet) or written inline in an HTML element using the style attribute.
- Inline styles overwrite embedded styles which in turn overwrite external styles.
- External stylesheets provide the best separation of HTML and CSS code and result in more maintainable code. Plus, an external stylesheet can be used in many HTML documents.

### Normalizing CSS

- Different browsers render some HTML elements differently.
- To address this issue we use a very popular stylesheet called `normalize.css`

### Linking HTML document to external stylesheet

    <link rel="stylesheet" href="" />

- `rel` (relationship) determines the type of resource we are linking this document to.

### Basic Selectors

- We can select elements by their type, class, attribute or ID.
- **Type**:

        body {}

- **id/class**:

      #products {} or .products {}

- **attribute**

      <a href="https://google.com" target="_blank">Google</a>

      a[target] or
      a[target="_blank"] or
      a[href*=google] or
      a[href^="https"][href$=".com"]{
        color: orange;
      }

### Relational Selectors

- We can also select elements based on their relationship with other elements.

      .products p {
        color: orange;
      }

- **Advaltage**: Relational selectors help us write cleaner markup codes, without specifying id or class.
- **Disadvantage**: two problems

  1. Can be fragile. If we move elements around, our CSS rules may break.

     - We can still use them in situations where we are certain about the location of elements.

  2. Not as fast as basic selectors. But it is negligible.

- If let's say, inside the `products` class we have multiple paragraphs and we only want to apply the style to the paragraph that is direct child of `products` class

      <section class="products">
        <p>Lorem ipsum dolor sit amet.</p>
        <article>
          <p>Lorem ipsum dolor sit amet.</p>
        </article>
      </section>

      .products > p {
        color: orange;
      }

- If we want to style a paragraph element that is a direct sibling of `<section>`. This only works for immediate sibling. If we have multiple siblings, it'll only apply on the first sibling.

      <section class="products">
        <p>Lorem ipsum dolor sit amet.</p>
        <article>
          <p>Lorem ipsum dolor sit amet.</p>
        </article>
      </section>

      <p>Lorem ipsum dolor sit amet.</p>

      .products + p {
        color: orange;
      }

  - If we want to apply the style to all siblings

        .products ~ p {
          color: orange;
        }

### Pseudo-class selector

- We can take advantage of pseudo-classes to target elements without the need to give them a specific class.
- The most common pseudo-classes are: `first-child`, `first-of-type`, `last-child`, `last-of-type` and `nth-child`.
- Pseudo-classes start with a single colon.

      article :first-child {
        font-size: 140%;
        font-style: italic;
      }

      article p:first-of-type {
        font-size: 140%;
        font-style: italic;
      }

- Apply style to the odd items in a list

      ul li:nth-child(odd) {
        color: deeppink;
      }

- Apply style to every third items in a list

      ul li:nth-child(3n) {
        color: deeppink;
      }

- **Links.** we have few pseudo-class selectors for working with hyperlinks

      a:visited, a:link {
        color: dodgerblue;
      }

- `a:link` applies to all hyperlinks
- `:hover` applies to any type of selectors.

  - As a best practice, whenever we use the `:hover` pseudo-selector, we should also use `:focus` pseudo-selector so that it works with the tab key.

        a:hover, a:focus {
          color: deeppink;
        }

### Pseudo-element selectors

- With pseudo-elements we can style a part of an element.
- The most common pseudo-elements are: `first-letter`, `first-line`, `selection`, `before` and `after`.
- Pseudo-elements start with double colons.

      p::first-letter {
        font-size: 140%;
        font-weight: bold;
      }

      ::selection {
        background-color: pink;
      }

### Selectors specificity

- Selectors specificity determines the weight of a selector.
- When multiple selectors target the same element, the browser applies the selector with the higher specificity (weight) i.e. the rule that is more specific.
- If two selectors have the same specificity, the one that comes last is the winner.
- ID selectors are the most specific selectors because we cannot have multiple elements with the same ID. Class and attribute selectors are less specific because we can have many elements with the same class and/or attributes. Element selectors are the least specific selectors.
- In VSCode, we can see the specificity of a rule by hovering our mouse over it. The specificity is represented using three numbers (x, y, z) where x represents the number of ID selectors, y represents the number of class/attribute selectors and z represents the number of element selectors.

### Inheritance

- Some CSS properties inherit their value from their parent element.
- Typically, properties that are used for styling text such as text color, font, font size etc. are inherited.
- We can stop the inheritance by setting the value of a property to `initial`.

      .products {
        color: initial;
      }

- To enforce inheritance, we should set the value of a property to `inherit`.

      .products {
        color: inherit;
      }

### Color

- We can specify colors by their

  - name
  - hexadecimal value

        background-color: #e6cd10;

    - In hexadecimal we cannot specify the transparency/opacity.

  - RGB/RGBA value

        background-color: rgb(255, 255, 255);
        background-color: rgba(255, 255, 255, 1);

  - HSL/HSLA value

        background-color: hsl(44, 98%, 50%);
        background-color: hsla(44, 98%, 50%, 1);
        background-color: hsl(44deg 98% 50%);

### Gradients

- With gradients we can create beautiful transitions between two or more colors.
- Using the `linear-gradient()` and `radial-gradient()` functions we can create gradients in CSS.
- Gradients are images so they cannot be used as the value of `background-color` property.
- We can use them as the value of `background-image` or `background` properties.

      background: linear-gradient(dodgerblue, yellow);

- By default, the direction of the transition is top to bottom. To change it specify the direction as the first argument:

      background: linear-gradient(to right, dodgerblue, yellow);
      background: linear-gradient(to bottom right, dodgerblue, yellow);
      background: linear-gradient(45deg, dodgerblue, yellow);
      background: linear-gradient(45deg, dodgerblue, yellow 30%);
      background: linear-gradient(45deg, dodgerblue, yellow, tomato);

      background: radial-gradient(white, yellow);
      background: radial-gradient(circle, white, yellow);
      background: radial-gradient(circle at top left, white, yellow);

### Border

- The `border` property is a shorthand property for `border-top`, `border-right`, `border-bottom` and `border-left`.
- It takes three values: the thickness of the border, its style and its color.

      border: 1px solid royalblue;
      border: 1px dotted royalblue;
      border: 1px dashed royalblue;

- We also have specific properties like `border-width`, `border-style` and `border-color`. These properties take four values for the top, right, bottom and left borders.

      border-width: 1px 2px 1px 2px;    /* top, right, bottom, left */
      border-radious: 10px;

### Shadows

- Using the `box-shadow` and `text-shadow` properties we can apply a shadow to elements and text.
- These properties take a few values.

  - The first two values determine the horizontal and vertical distance of the shadow from the element.
  - The third value (called blur radius) determines the softness of the border.
  - We can specify the color as the fourth value.

        box-shadow: 10px 10px 30px grey;
        box-shadow: 0 0 30px grey;

        text-shadow: 3 px 3px 5px grey;
        text-shadow: 3 px 3px 5px rgba(0, 0, 0, 0.2);
