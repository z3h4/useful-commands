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
- The most common pseudo-classes are: `first-child`, `first-of-type`, `last-child`, `last-of-type`, `nth-of-type(n)` and `nth-child`.
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

# Layout

### Sizing Elements

- By default, the width and height properties are applied to the content box. So paddings and borders increase the size of the visible box.
  - This behavior can be changed by setting the `box-sizing` property to `border-box` (By default it is set to `content-box`).
- The width and height properties are only applied to the block-level elements.

  - Inline elements don't respect the width and the height properties.
  - But if we want to give an inline element width and height, use

        display: inline-block;

  - For inline elements `display` property is set to `inline` by default.
  - For div, it is set to `block`

        span {
          width: 100px;
          height: 100px;
          background-color: gold;
          display: inline-block;
        }

## Overflow

- When dealing with fixed-size elements sometimes overflow may happen.
- Overflow occurs when an element’s content is too large to fit.
- Using the `overflow` property we can specify what should happen when overflow occurs.

      overflow: visible;    /* Defalult value */
      overflow: hidden;     /* Extra content will be hidden */
      overflow: scroll;     /* Show horizontal and vertical scrollbars */
      overflow: auto;       /* Show scrollbar only when there is overflow */

- `overflow` property is the shorthand of two properties: `overflow-x` and `overflow-y`.

      overflow: hidden auto;   /* horizontal: hide, vertical: auto */

## Measurement Units

- Measurement units in CSS fall into two categories: absolute and relative units.

### Absolute units

- The values of absolute units does not change.
- Examples of absolute units are `px`, `pt`, `in`, `cm`, `mm` etc.
- `pt`, `in`, `cm`, `mm` are only used in printing, not in web.

### Relative units

- With relative units we can create elements that adjust to the screen sizes. We can create more scalable layouts.
- Examples of relative units are `%`, `vw`, `vh`, `em` and `rem`. -`%` : relative to the size of the container.
  - `vh`/`vw` : relative to the size of the viewport.
  - `em`/`rem` : relative to the size of the font size.

\*\* `body`, `p'` etc. are block-level elements.

\*\* By default, the width of the block-level elements is 100% and height is 0.

- If we want a content to take up the entire available vertical space, use

      height: 100vh;

- We use `em` and `rem` when we want to adjust the layout according to the font size.

  - For example, if the font is bigger, we want the witdh to be increased as well.

        width: 10em;  /* 10 x font size of the current element */
        width: 10rem;  /* 10 x font size of the root element */

  - When we use rem, for the purpose of easier calculation, we can set

        html {
          font-size: 62.5%    /* 62.5 % of 16px = 10px */
        }

## Positioning

- Using the position property we can precisely position an element.
- The default value of this property is `static`.
- If we change the value of this property, the element is considered positioned.

### Relavice Positioning

- By setting the position to `relative`, we can position an element relative to its normal position.
- This does not impact other elements on the page.

      .box {
        background: tomato;
        position: relative;
        left: -4rem;
        z-index: 1;
      }

- **z-index**:
  - Represents depth
  - By default, the `z-index` property of all elements is 0.
  - If we set a positive value to `z-index`, that element comes closer to us.
  - If we set it to negative value, it moves away from us.

### Absolute Positioning

- By setting the position to `absolute`, we can position it relative to its positioned parent/container.
- That means, in the the parent we should set `position: relative;`.

  - Then in the child element

        .box {
          position: absolute;
          right: 0;   /* If we use 0, we don't need to specify unit */
        }

- When we absolutely position an element, that element is removed from the normal flow of the page and all the other elements are rendered as if the absolutely positioned element doesn't exist.
  - Which means, from the parent's point of view that element does not exist.
  - We can imagine it's on a separate layer.

### Fixed Positioning

- By setting the position to `fixed`, we can position the element relative to the viewport.
  - For example, we want to have aour navigation bar that always stays on the top even if we scroll down.

**Setting the size of positioned elements**

1. Use width and height property
2. Use combination of left + right or top + botton.

## Floating Elements

- By setting the float property, we can push an element to the left or right side of its container.
- Other elements will flow around the floated element and fill the available space.

      clear: left;  /* to clear float: left; */
      clear: both;  /* to clear both left and right float */

- Floated elements are invisible to their parent. This behavior is called collapsing parent and often causes layout issues. To fix this, we have to clear the floated elements.

  - So, pretty much whenever we use float, we have to clear it after.

        .clearfix::after {
          content: '';
          display: block;
          clear: both;
        }

## Flexbox (Flexible Box Layout) or Flex

- Is used for laying out elements in one direction (in a row or column).
- It's a lot easier and powerful than float.
- A common application of Flex is in building navigation menus.

  - Use horizontal direction.

        .container {
          border: 1px solid lightgrey;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          height: 90vh;
        }

        .box {
          width: 5rem;
          height: 5rem;
          background: gold;
          margin: 1rem;
        }

### Direction

- The default direction is row. We can change it to column by using `flex-direction`

      flex-direction: column;
      flex-direction: column-reverse;
      flex-direction: row-reverse;

### Alignment

**Axes**: In flex we have 2 axes.

1. Main (primary)
2. Cross (secondary)

- These axes are dependent on the direction.
  - If we set the direction to row, the main axes will be along horizontal axis and the cross axes will be along the vertical axes.
  - If we set the direction to column, the main axes will be along vertical axis and the cross axes will be along the horizontal axes.
- Using these axes we can easily align items inside their container.
- For aligning items we can use 2 properties:
  1. `justify-content`: align items along the main axes.
     - possible values are: `flex-start`, `flex-end`, `center`, `space-evenly`, `space-between`, `space-around`
  2. `align-items`: align items along the cross axes.
     - possible values are: `flex-start`, `flex-end`, `center`,
- There is another property called `align-content`

  - This property only works if we have multiple lines in our flex container.
  - It helps us to align entire contet inside a container as a whole.

        align-content: center;

- **`flex-wrap`**: If there is not enough space, flex will make the items smaller so that they can fit in one line. To chane this behaviour use

      flex-wrap: wrap;    /* Default value is nowrap */

- To change the alignment of only one content use `align-self` property.

  - We apply this property on flex items, not on the flex container.
  - With this we can override the value we have assigned on the container using `align-items` or `justify-content`.

        align-self: flex-start;

### Sizing

- There are few properties which should be applied on flex items (not on the flex container).

1.  `flex-basis`: set the initial size of a flex item.
    - By default, it is set to `auto`.
2.  `flex-grow`: set the growth factor.
    - By default, it is set to 0.
    - It takes only number, not any unit.
3.  `flex-shrink`: set the shrink factor.
    - By default, it is set to 0.
    - It takes only number, not any unit.
4.  `flex`: it combines the above 3 properties.

        flex: 1;   /* It'll be used to set flex-grow */
        flex: 1 1;   /* It'll be used to set flex-grow and flex-shrink */
        flex: 1 15rem;   /* It'll be used to set flex-grow and flex-basis */
        flex: 1 1 15rem;   /* It'll be used to set flex-grow, flex-shrink and flex-basis */

## Grid

- Using `flex`, we can lay our elements in a row or column.
- We use `grid` to lay out elements in both rows and columns.
- The grid Layout is a two-dimensional grid system.
- It’s often used to lay out major page areas, photo galleries, etc.

### Defining a grid

- On the container we set

      display: grid;
      /* 3 x 2 */
      grid-template-rows: 100px 100px 100px;
      or
      grid-template-rows: repeat(3, 100px);

      grid-template-columns: 100px 100px;
      or
      grid-template-columns: repeat(2, 100px);

- Using `grid-template-rows` and `grid-template-columns` we define the number and size of rows and columns.
- Using `grid-template` we can set both rows and columns

      grid-template: repeat(2, 100px) / repeat(2, 100px);

      is equivalent to:

      grid-template-rows: repeat(3, 100px);
      grid-template-rows: repeat(2, 100px);

### Aligning grid items

- By default, items are aligned to top left.
- We can change it using two properties:

  1. `justify-items`: align along horizontal axis. Values could be `start`, `end`, `center` etc.
  2. `align-items`: align along vertical axis. Values could be `start`, `end`, `center` etc.

- The default value of these properties is `stretch`.

### Aligning the grid

- By default the grid is aligned to left.
- We can use `justify-content` to align it horizontally.
- We can use `align-content` to align it vertically.

### Apply gap between rows and columns

- We can use 3 properties

  1. `row-gap`: 10px;
  2. `column-gap`: 10px;
  3. `gap`: 10px;
     - shorthand for `row-gap` and `column-gap`

### Placing items in a grid

- We can use 3 properties (applied on the items)

  1.  `grid-row`: 10px;
  2.  `grid-column`: 2;
      - Item will start at second column
      - By default, each item takes one cell. But, if we want an item to take more than one cell then we specify start and end line number.
        - `grid-column: 1 / 3;` specify start and end column
        - `grid-column: 1 / -1;` -1 represents the last column
        - `grid-column: 1 / span 2;` use `span` to specify how many cells the item should take.
  3.  `grid-area`

      - shorthand for `grid-row` and `grid-column`

            /* start / end */
            /* row / column */
            /* i.e. startRow / startColumn / endRow / endColumn */
            grid-area: 1 / 1 / 1 / 3

- Another way to place items is by defining specific areas in our grid and then placing our items in those areas.

  - We have 2 properties for doing this.

    1.  `grid-template-areas`: we define this in our container.

            grid-template-areas:
              "header  header"
              "sidebar main"
              "footer  footer";

        - We have to use quotes
        - To represent an empty cell we can use `.`

              grid-template-areas:
                "header  header"
                "sidebar main"
                ".       footer";

    2.  `grid-area`: for each item we set this area

        - We don't use quotes when specifying the areas.

              grid-area: header;

- The overall rule is something like the following:

      .container {
        display: grid;
        grid-template: 100px auto 100px / 100px 30fr 70fr;
        border: 1px solid lightgrey;
        justify-items: center;
        align-items: center;
        justify-content: center;
        align-content: center;
        height: 100vh;
        row-gap: 10px;
        column-gap: 10px;
        grid-template-areas:
            "header  header"
            "sidebar main"
            "footer  footer";
      }

      .box-one {
        grid-area: header;
      }

## Hiding Elements

- We have two properties for hiding elements.

1. `display: none;`
   - Hides the element as if it was never there.
2. `visibility: hidden` (default value is `visible`)
   - Hides the element, but the space is still occupied.

## Media Queries

- With media queries we can provide different styles for different devices depending on their features such as screen size, orientation, etc.
- The most common application of media queries is in providing different styles based on the viewport width.
- By using media queries and relative measurement units we can build responsive web sites that adjust smoothly to various screen sizes.
- Media queries start with `@media` rule. then we type our query.
- A query can have multiple parts. With each part we are asking something about the target device.

  - The first part is the type of the device which can be -
    - `screen`: for web browsers
    - `print`: for printers
  - The second part is the condition like `min-width: 600px`

        @media screen and (min-width: 600px) and (max-width: 900px) {
          .container {
            flex-direction: row;
          }
        }
