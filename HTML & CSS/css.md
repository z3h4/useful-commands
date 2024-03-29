# CSS

- CSS (Cascading Style Sheets) are used for styling web pages.
- CSS is all about aesthetics and visual effects.
- With CSS we can also create beautiful animations.

### Embedding CSS into HTML

- CSS styles can be embedded in an HTML document, written in a separate file (as[] an external stylesheet) or written inline in an HTML element using the `style` attribute.
- Inline styles overwrite embedded styles which in turn overwrite external styles.
- External stylesheets provide the best separation of HTML and CSS code and result in more maintainable code. Plus, an external stylesheet can be used in many HTML documents.
- Problems with embedding stylesheets in an HTML document:
  - It is not scalable. If we want similar style for multiple components in separate files, we'll have code duplication.
  - It violates separation of concerns principle.
- Inline styles also violate separation of concerns principle.

### Normalizing CSS

- Different browsers render some HTML elements differently.
- To address this issue we use a very popular stylesheet called `normalize.css`.
- It provides basic default styles for some HTML elements so that they look exactly the same way across different browsers.

### Linking HTML document to external stylesheet

```HTML
<link rel="stylesheet" href="" />
```

- `rel` (relationship) determines the type of resource we are linking this document to.
- `link` element is a self-closing element.

### Basic Selectors

- We can select elements by their type, class, attribute or ID.
- **Type**:

  ```CSS
  body {}
  ```

- **id/class**:

  ```CSS
  #products {}
  .products {}
  ```

- **attribute**

  ```HTML
  <a href="https://google.com" target="_blank">Google</a>

  a[target] or
  a[target="_blank"] or
  a[href*=google] or
  a[href^="https"][href$=".com"]{
    color: orange;
  }
  ```

### Relational Selectors

- We can also select elements based on their relationship with other elements.

  ```CSS
  .products p {
    color: orange;
  }
  ```

- **Advantage**: Relational selectors help us write **cleaner markup codes**. We can select elements without the need to assign them a specific ID or class.
- **Disadvantage**: two problems

  1. Can be fragile. If we move elements around, our CSS rules may break.

     - We can still use them in situations where we are certain about the location of elements.

  2. Not as fast as basic selectors. But it is negligible.

- If let's say, inside the `products` class we have multiple paragraphs and we only want to apply the style to the paragraph that is direct child of `products` class

  ```HTML
  <section class="products">
    <p>Lorem ipsum dolor sit amet.</p>
    <article>
      <p>Lorem ipsum dolor sit amet.</p>
    </article>
  </section>

  .products > p {
    color: orange;
  }
  ```

- If we want to style a paragraph element that is a direct sibling of `<section>`. This only works for immediate sibling. If we have multiple siblings, it'll only apply on the first sibling.

  ```HTML
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
  ```

  - If we want to apply the style to all siblings
    ```CSS
    .products ~ p {
      color: orange;
    }
    ```

### Pseudo-class selector

- In CSS we have a bunch of pseudo-classes that are automatically applied by the browser.
- We can take advantage of these pseudo-classes to target elements without the need to give them a specific class.
- The most common pseudo-classes are: `first-child`, `first-of-type`, `last-child`, `last-of-type`, `nth-child` and `nth-of-type(n)`.
- Pseudo-classes start with a single colon.

  ```CSS
  article :first-child {
    font-size: 140%;
    font-style: italic;
  }

  article p:first-of-type {
    font-size: 140%;
    font-style: italic;
  }
  ```

- Apply style to the odd items in a list

  ```CSS
  ul li:nth-child(odd) {
    color: deeppink;
  }
  ```

- Apply style to every third items in a list

  ```CSS
  ul li:nth-child(3n) {
    color: deeppink;
  }
  ```

- We have a few selectors to select an element in a particular class (state)

  - `:hover`
  - `:active`
  - `:visited`

- **Links.** we have few pseudo-class selectors for working with hyperlinks

  ```
  a:visited, a:link {
    color: dodgerblue;
  }
  ```

- `a:link` applies to all hyperlinks
- `:hover` applies to any type of selectors.

  - As a best practice, whenever we use the `:hover` pseudo-selector, we should also use `:focus` pseudo-selector so that it works with the tab key.

    ```CSS
    a:hover, a:focus {
      color: deeppink;
    }
    ```

- Watch the video

### Pseudo-element selectors

- With pseudo-elements we can style a part of an element.
- The most common pseudo-elements are: `first-letter`, `first-line`, `selection`, `before` and `after`.
- Pseudo-elements start with double colons.

  ```CSS
  p::first-letter {
    font-size: 140%;
    font-weight: bold;
  }

  ::selection {
    background-color: pink;
  }

  p::before {
    content: "...";
  }
  ```

- **Difference between pseudo-element and pseudo-class selectors?**
  - We use pseudo-elements to style a part of an element.
  - In contrast, we use pseudo-classes to style an element in a particular state. Like, an anchor that is hovered.
- Watch the video

### Selectors specificity

- Each selector has a specifity or weight.
- Selectors specificity determines the weight of a selector.
- When multiple selectors target the same element, the browser applies the selector with the higher specificity (weight) i.e. the rule that is more specific.
- If two selectors have the same specificity, the one that comes last is the winner.
- ID selectors are the most specific selectors because we cannot have multiple elements with the same ID. Class and attribute selectors are less specific because we can have many elements with the same class and/or attributes. Element selectors are the least specific selectors, because we can have many elements of a given type.
- In VSCode, we can see the specificity of a rule by hovering our mouse over it. The specificity is represented using three numbers (x, y, z) where x represents the number of ID selectors, y represents the number of class/attribute selectors and z represents the number of element selectors.
- Watch the video

### Inheritance

- Some CSS properties inherit their value from their parent element.
- Typically, properties that are used for styling text such as text color, font, font size etc. are inherited.
- We can stop the inheritance by setting the value of a property to `initial`.

  ```CSS
  .products {
    color: initial;
  }
  ```

- To enforce inheritance, we should set the value of a property to `inherit`.

  ```CSS
  .products {
    color: inherit;
  }
  ```

### Color

- We can specify colors by their

  - name
  - hexadecimal value

    ```CSS
    background-color: #e6cd10;
    ```

    - In hexadecimal we cannot specify the transparency/opacity.

  - RGB/RGBA value

    ```CSS
    background-color: rgb(255, 255, 255);
    background-color: rgba(255, 255, 255, 1);
    ```

  - HSL/HSLA value (hue, saturation, and lightness)

    ```CSS
    background-color: hsl(44, 98%, 50%);
    background-color: hsla(44, 98%, 50%, 1);
    background-color: hsl(44deg 98% 50%);
    ```

- RGBA and HSLA values include an alpha channel used for transparency. The value for the alpha channel is a decimal point number between 0 (completely transparent) and 1 (completely opaque).

### Gradients

- With gradients we can create beautiful transitions between two or more colors.
- Using the `linear-gradient()` and `radial-gradient()` functions we can create gradients in CSS.
- Gradients are images so they cannot be used as the value of `background-color` property. We can use them as the value of `background-image` or `background` properties.

  ```CSS
  background: linear-gradient(dodgerblue, yellow);
  ```

- By default, the direction of the transition is top to bottom. To change it specify the direction as the first argument:

  ```CSS
  background: linear-gradient(to right, dodgerblue, yellow);
  background: linear-gradient(to bottom right, dodgerblue, yellow);
  background: linear-gradient(45deg, dodgerblue, yellow);
  background: linear-gradient(45deg, dodgerblue, yellow 30%);
  background: linear-gradient(45deg, dodgerblue, yellow, tomato);

  background: radial-gradient(white, yellow);
  background: radial-gradient(circle, white, yellow);
  background: radial-gradient(circle at top left, white, yellow);
  ```

### Border

- The `border` property is a shorthand property for `border-top`, `border-right`, `border-bottom` and `border-left`.
- It takes three values: the thickness of the border, its style and its color.

  ```CSS
  border: 1px solid royalblue;
  border: 1px dotted royalblue;
  border: 1px dashed royalblue;
  ```

- We also have specific properties like `border-width`, `border-style` and `border-color`. These properties take four values for the top, right, bottom and left borders.

  ```CSS
  border-width: 1px 2px 1px 2px;    /* top, right, bottom, left */
  border-radious: 10px;
  ```

### Shadows

- Using the `box-shadow` and `text-shadow` properties we can apply a shadow to elements and text.
- These properties take a few values.

  - The first two values determine the horizontal and vertical distance of the shadow from the element.
  - The third value (called blur radius) determines the softness of the border. It is used for bluring the shadow.
  - The fourth value is used for spreading the shadow. The larger the value, the bigger the shadow will be.
  - We can specify the color as the fifth value.

    ```CSS
    box-shadow: 10px 10px 30px grey;
    box-shadow: 0 0 30px grey;
    box-shadow: 0 0 20px 10px #f3f3f3;

    text-shadow: 3px 3px 5px grey;
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
    ```

- Watch the video

# Layout

### The Box Model

- When rendering an HTML document, the browser puts each element inside a box. The box contains four areas: the content area, the padding area, the border area and the margin area.
- Padding is the space between the border and the content area. Margin is the space outside of an element and should be used to separate elements from each other.
- Margin collapsing happens when the top and bottom margins of elements are combined into a single margin. The size of the margin is equal to the largest of the two margins.
  - This does not happen on left and right margins. Only top and bottom margins.
  - The margins of floating and absolutely positioned elements never collapse.

### Sizing Elements

- By default, the width and height properties are applied to the content box.
  - So paddings and borders increase the size of the visible box.
  - This behavior can be changed by setting the `box-sizing` property to `border-box` (By default it is set to `content-box`).
  - The margin property does not impact the size of the visible box. It'll just move the box away from other boxes.
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

- We can use the universal selector to select all HTML elements. Most of the time we use this to set the `box-sizing` property to `border-box` for all HTML elements.

      *, *::before, *::after {
        box-sizing: border-box;
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

- The values of absolute units are fixed, they does not change.
- Examples of absolute units are `px`, `pt`, `in`, `cm`, `mm` etc.
- `pt`, `in`, `cm`, `mm` are only used in printing, not in web.

### Relative units

- With relative units we can create elements that adjust to the screen sizes. We can create more scalable layouts.
- Examples of relative units are `%`, `vw`, `vh`, `em` and `rem`.
  - `%` : relative to the size of the container.
  - `vh`/`vw` : relative to the size of the viewport.
  - `em`/`rem` : relative to the font size.

\*\* `body`, `p` etc. are block-level elements.

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
- The default value of this property is `static`. That means they are not positioned. They appear exactly in their normal position.
- If we change the value of this property, the element is considered positioned.

### Relative Positioning

- By setting the position to `relative`, we can move an element relative to its normal position.
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

- By setting the position to `absolute`, we can position it relative to its container.
- For this to happen, in the container we should set `position: relative;`.

  - Then in the child element

        .box {
          position: absolute;
          right: 0;   /* If we use 0, we don't need to specify unit */
        }

- When we absolutely position an element, that element is removed from the normal flow of the page and all the other elements are rendered as if the absolutely positioned element doesn't exist.
  - Which means, from the parent's point of view that element does not exist.
  - We can imagine it's on a separate layer.

### Fixed Positioning

- Sometimes we want to position an element relative to it's viewport.

      .navbar {
        position: fixed;
        top: 0;
      }

- For example, we want to have a navigation bar that always stays on the top even if we scroll down.

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

- It is a layout method.
- Is used for laying out elements in one direction (in a row or column).
- It's a lot easier and powerful than float.
- A common application of Flex is in building navigation menus.

  - Use horizontal direction.

        .container {
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
     - Default value is `flex-start`.
     - possible values are: `flex-start`, `flex-end`, `center`, `space-evenly`, `space-between`, `space-around`
  2. `align-items`: align items along the cross axes.
     - possible values are: `flex-start`, `flex-end`, `center`, `space-evenly`, `space-between`, `space-around`
- There is another property called `align-content`

  - This property only works if we have multiple lines in our flex container.
  - It helps us to align entire contet inside a container as a whole.

        align-content: center;

- **`flex-wrap`**: If there is not enough space, flex will make the items smaller so that they can fit in one line. To change this behaviour use

      flex-wrap: wrap;    /* Default value is nowrap */

- To change the alignment of only one content use `align-self` or `justify-self` property.

  - We apply this property on flex items, not on the flex container.
  - With this we can override the value we have assigned on the container using `align-items` or `justify-content`.

        align-self: flex-start;
        justify-self: flex-start;

### Sizing

- Control the size of the flex items based on the available space.
- There are few properties **which should be applied on flex items (not on the flex container)**.

1.  `flex-basis`: set the initial size of a flex item.
    - By default, it is set to `auto`.
    - If the `flex-direction` is set to `row`, `flex-basis` translates to the `width` property. If we set the direction to column, `flex-basis` would translate to the `height` property.
2.  `flex-grow`:
    - It determines the growth factor of our flex items.
    - With `flex-grow`, we can allow the items to grow and take up the available space.
    - By default, it is set to 0.
    - It takes only number, not any unit.
3.  `flex-shrink`:
    - It determines the shrink factor of our flex items.
    - This property is the opposite of `flex-growth`. It tells the browser how these elements should shrink if there is not enough space to fit in the container.
    - By default, it is set to 0.
    - It takes only number, not any unit.
4.  `flex`: it combines the above 3 properties.

        flex: 1;   /* It'll be used to set flex-grow */
        flex: 1 1;   /* It'll be used to set flex-grow and flex-shrink */
        flex: 1 15rem;   /* It'll be used to set flex-grow and flex-basis */
        flex: 1 1 15rem;   /* It'll be used to set flex-grow, flex-shrink and flex-basis */

## Grid

- Using `flex`, we can lay our elements either in a row or a column.
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

      grid-template: repeat(3, 100px) / repeat(2, 100px);

      is equivalent to:

      grid-template-rows: repeat(3, 100px);
      grid-template-columns: repeat(2, 100px);

### Aligning individual grid items

- By default, items are aligned to top left.
- We can change it using two properties:

  1. `justify-items`: align along horizontal axis. Values could be `start`, `end`, `center` etc.
  2. `align-items`: align along vertical axis. Values could be `start`, `end`, `center` etc.

- The default value of these properties is `stretch`.
- **Set these property in the container.**

### Aligning the grid inside it's container

- By default the grid is aligned to the left side of it's container.
- We have 2 properties to align the grid inside it's container.
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

    1.  `grid-template-areas`

        - We define this in our container.

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

    2.  `grid-area`

        - For each individual item we set this area
        - **We don't use quotes when specifying the areas.**

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
- By using **media queries** and **relative measurement** units we can build responsive web sites that adjust smoothly to various screen sizes.
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

- So, with media queries we can query certain properties of a device, like it's type (`screen`/`print`), it's width etc. and then provide styles that would only apply if those properties are met.

---

# Typography

## Fonts

- Fonts fall into three main categories: `Serif`, `sans-serif` and `Monospace`.
- `Serif` fonts have a line/stroke at the edges of their characters. They’re more professional and serious.
  - Example: `Georgia`, `Times New Roman` etc.
- `sans-serif` fonts don’t have those edges. They’re more modern, warm and friendly.
  - Example: `Avenir`, `Arial`, `Futura`, `Helvetica`, `Roboto` etc.
- `Monospace` fonts have equal-width characters. They’re often used in displaying code.
  - Example: `Consolas`, `Courier`, `Ubuntu` etc.

## Styling Fonts

### `font-family`

- Use `font-family` property to set the font for an element.
- We should set this property to a font stack which contains multiple fonts as fallbacks.
  - A font stack consists of multiple fonts.

### `font-weight`

- Set the boldness of the font.
  - Values can be
    - Integer value in range 100 - 900, 100 = thin, 900 = thick
    - `bold` (700), `bolder`, `lighter`, `normal` (400)

### `font-style`

- Values can be `normal` (default), `italic` etc.

### `font-size`

- It’s best to size fonts using the `rem` unit.
  - This will set the font size relative to the font size of the root (html) element.
    - `font-size: 1rem` means 1 \* font size of the root element.
  - Using media queries, we can resize the base font size, and as a result, the font size for all elements will be re-calculated with no extra code.
- Use [type-scale.com](type-scale.com) to find right font size for different headings.

### `font-display`

- The `font-display` property defines how font files are loaded and displayed by the browser.
- It is applied to the `@font-face` rule which defines custom fonts in a stylesheet.
- When using a custom font, the user may experience a flash of unstyled text (FOUT). Some browsers display text using a fallback font while downloading the custom font and swap it once the custom font is available. This may cause a layout shift depending on how the content is structured. Some browsers hide the text initially while downloading the custom font. This causes a flash of invisible text (FOIT). Using the font-display property we can tell the browser how to handle this situation.
- **Values**
  - The font-display property accepts five values:
    - `auto` (default): This is most often similar to the `block` or `swap` value.
    - `block`: Instructs the browser to briefly hide the text until the font has fully downloaded. More accurately, the browser draws the text with an invisible placeholder then swaps it with the custom font face as soon as it loads. This is also known as a **flash of invisible text** or FOIT.
      - We should never use this value.
    - `swap`: Instructs the browser to use the fallback font to display the text until the custom font has fully downloaded. After download swap the custom font. This is also known as a “flash of unstyled text” or FOUT.
    - `fallback`: Acts as a compromise between the `auto` and `swap` values. The browser will hide the text for about 100ms and, if the font has not yet been downloaded, will use the fallback text. It will swap to the new font after it is downloaded, but only during a short swap period (probably 3 seconds).
    - `optional`: Like `fallback`, this value tells the browser to initially hide the text, then transition to a `fallback` font until the custom font is available to use. However, this value also allows the browser to determine whether the custom font is even used at all, using the user’s connection speed as a determining factor where slower connections are less likely to receive the custom font.
      - Even if the browser does not show the custom font, it will try to download the font and store it in the browser cache. In the subsequent page load, the browser will use the font from the cache.
- https://css-tricks.com/almanac/properties/f/font-display

### `color`

- By default the color is set to black.

### Embedding Web Fonts

- In the past, we used **web safe fonts** because they are available on almost all computers. Examples -
  - `Arial`
  - `Helvetica`
  - `Georgia`
  - `Times New Roman`
- These days, however, we can easily embed custom fonts.
  - The popular websites where we can find fonts
    - [fontsquirrel.com](fontsquirrel.com)
    - [fonts.com](fonts.com)
    - [myfonts.com](myfonts.com)
- **Font Formats**
  - Font files come in a variety of different formats: `TTF`, `OTF`, `EOT`, `WOFF` and `WOFF 2.0`.
  - Out of these, `WOFF` and `WOFF 2.0` are recommended for the web because they’re more compressed and can be downloaded in less time.
  - We can convert any font file to a `WOFF` file on [fontsquirrel.com](fontsquirrel.com).
  - To embed a custom font, we should first register it using the `@font-face` rule and tell the browser where to find the font files.
    - We should put the `@font-face` rules at the top of our CSS file
      - Because we have to register the fonts first before we can use them.

### Font Services

- Using font services we can get access to thousands of beautiful fonts with zero or minimal cost.
- [Google Web Fonts](fonts.google.com) is the most popular and free font service.
  - All the fonts are free.
- When using these services, fonts and `@font-face` rules are served from the provider’s servers.
- Paid font services
  - [Adobe fonts](fonts.adobe.com)
  - [fonts.com](fonts.com)
  - [fontdeck.com](fontdeck.com)

### System Font Stack

- A common practice for content-heavy websites is to use the system font stack which represents the default font used by an operating system.
- With the system font stack, we achieve a better performance because no fonts need to be downloaded and the FOUT/FOIT doesn’t happen either. Plus, the page looks more familiar to the user because they see the same default font used by their device.
- On the flip side, the default font varies from one device to another.

### Vertical Spacing

- 2 properties that are used for vertical spacing.
  1. `margin`
  2. `line-height`
     - Using the `line-height` property we can specify the height of lines. It’s best to set this property to a unitless value around 1.5. This value will be multiplied by the font size of the current element so we don’t need to remember to change the line height if we modify the font size.
     - A general rule of thumb is to set this 1.5 times to the font size. (i.e. `line-height: 1.5`)

**The law of proximity** describes how humans perceive the connection between objects.

- Objects that are closer are perceived to be related.

### Horizontal Spacing

- The three properties used for horizontal spacing are:
  1. `letter-spacing`
     - Specify space between the letters.
     - We should not use `rem` values
  2. `word-spacing`
     - Specify space between the words.
  3. `width`
     - The ideal line length is about 60-70 characters. We can achieve that by applying a `width` of `50ch`.
     - The `ch` is an unit in CSS that represents the width of the character `0`. 50 zeroes roughly represents 60-70 characters because some characters (like i and 1) are more narrow than 0.
- It’s often better to apply a negative letter spacing to headings so they look more compact.

### Formatting Text

- `text-align`
  - Controls horizontal alignment of our text.
  - Default calue is `left`. Others are `right`, `center`, `justify`
  - We should not use `justify` because it inserts whitespace between words.
- `text-indent`
  - Add indentation on the first line of our text. `text-indent: 1rem;`
- `text-decoration`
  - Values: `underline`, `line-through`
- `text-transform`
  - Values: `lowercase`, `uppercase`, `capitalize` (capitalize the first letter of every word, useful for headings)
- `white-space`
  - Used for controlling wrapping.
  - Values: `nowrap`
- `column-*`
  - Create multicolumn text. `column-count: 2`
  - Control the gaps between the columns. `column-gap: 2rem`
  - Add a line between the columns. `column-rule: 3px dotted #999`
- `direction`
  - This is used in right-to-left languages.
  - Default value is `ltr` (left to right)
  - Other values: `rtl`
- `text-overflow`
  - `ellipsis` (show `...`)

**How to truncate text**

- We need to set 4 properties

      width: 50ch;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

---

# Images

- In HTML we have 2 types of images:

  1.  Content Images
      - We use the `img` element to display content images.
      - Each `img` element should have 2 attributes: `src` and `alt`
      - Content images can represent meaningful content or be used for decorative purposes.
      - If used for decoration, we should set the `alt` attribute to an empty string; otherwise, screen readers will read out the name of the file which may be distracting to the user.
  2.  Background Images

      - Quite often we use background image for decorative purposes.

            background: url('../images/bg-paper.jpg');
            background-repeat: no-repeat;   /* other values: repeat-x, repeat-y */

      - By default, the background image is placed on the top left corner of the screen.

            background-position: 100px 100px;   /* Horizontal & vaetical adjustment values */

      - Change the size of the background image

            background-size: 200px 200px; /*  other values: cover */

      - By default, if we scroll, the background image moves. If we don't want it, set

            background-attachment: fixed;

## How to prevent image from squashing?

- We use the css property `object-fit: cover` so that the image cover the entire containing box.
  - When we set this property our image gets resized and will potentially crop so it covers the entire containing box.
  - This fixes the problem when we set the size of and image, but it gets squashed.

## How to get a round image?

- If we set the `border-radious` property of an image to a value that is half of the width, we'll get a round image.

  ```CSS
  img {
    width: 100px;
    border-radious: 50px;
  }
  ```

### CSS Sprites

- An image sprite is a single image that combines multiple images.
- With this we can reduce the number of HTTP requests.
- The problem with CSS sprites is that every time we need to change one of the images in the sprite, we have to re-generate the sprite.
  - So, use this technique for small images that don’t change often. You can generate a sprite using [https://cssspritestool.com](https://cssspritestool.com).

### Data URLs

- It is another optimization technique to reduce the number of HTTP requests.
- Data URLs allow us to embed an image data directly in an HTML document or a stylesheet.

- **Problems:**
  - The embedded code is always greater than the size of the original resource. Use this technique only if you know what you’re doing!
  - If we wanr to change the image, we will need to regenarate the data URL.
  - On mobile devices Data URLs are significantly slower to display than external images.

### Clipping

- We can clip or cut part of an image using the `clip-path` property in CSS. To generate a clip path from basic templates, visit [https://bennettfeely.com/clippy](https://bennettfeely.com/clippy)

### Filters

- Using the `filter` property in CSS, we can apply filters such as `grayscale`, `blur`, `saturate`, `brightness` and so on.

      filter: grayscale(70%);
      filter: grayscale(70%) blur(3px);

### Supporting High-density Screens

- High-density screens like Apple’s Retina displays contain more pixels than standard-density screens. The pixels on these screens are smaller than the pixels on standard-density screens. So when displaying an image, the screen uses a scale factor (1.5 or greater) to scale up the image. As a result, raster images may look a bit blurry when shown on these screens. To solve this problem, we can supply 2x or 3x versions of an image using the srcset attribute of the `img` element.
- Our devices these days have a few properties
- **Physical Resolution**: Actual # of pixels on the device. For example, physical resolution of iPhone4 is 960 x 640
- **Logical Resolution**: Which is basically how the device behave. For example, logical resolution of iPhone4 is 480 x 320
- **Device Pixel Ratio (DPR)**: Ratio of physical and logical pixels. For example, iPhone4 has a DPR of 2.
- **High Density Screen:** DPR > 1
- CSS is always based on the logical resolution.

- To provide different high quality versions of the image for high density screen, we use `srcset` attribute.

  - With this attribute we can provide a set of sources for different screens.

        <img src="images/meal.jpg"
             alt="A bowl of salmon and curry"
             srcset="images/meal.jpg 1x,
                     images/meal@2x.jpg 2x,
                     images/meal@3x.jpg 3x" >

  - This technique is for fixed size images.

### Resolution Switching

- For flexible-sized images, we need to supply the image in various sizes for different devices like mobiles, tablets and desktop computers.
- If we supply a single image, the browser on each device has to resize the image which can be a costly operation. The larger the image, the more memory is needed and the more costly the resizing operation will be. Plus, the extra bytes used to download the image will be wasted. This is the resolution switching problem.
- To address this, we should give the `img` element a few image sources and the size of the image for various viewports. The browser will take the screen resolution and pixel density into account and download the image that best fits the final size.

- It's better to use the following syntax to tackle this problem

      <img src="images/meal.jpg"
             alt="A bowl of salmon and curry"
             srcset="images/meal.jpg 400w,
                     images/meal@2x.jpg 800w,
                     images/meal@3x.jpg 1200w"
              sizes="(max-width: 500px) 100vw
                     (max-width: 700px) 50vw
                     33vw"
              >

- The best way to decide on the sizes and generate image assets is to use the website [https://www.responsivebreakpoints.com](https://www.responsivebreakpoints.com)

### Using Modern Image Format

- `WebP` is a modern image format created by Google and is widely supported except in Internet Explorer.
  - It produces smaller image than jpg or png.
- To support modern image formats, we can use the `picture` element with multiple `source` elements.
- The `picture` element should always contain an `img` element otherwise the image is not shown. Also,

  - In the `img` element we define the `alt` text.
  - It will support the browsers which do not support `picture` or `source` elements.

      <picture>
        <source type="image/webp" srcset="images/meal.webp" />
        <source type="image/jpeg" srcset="images/meal.jpg" />
        <img src="images/meal.jpg" alt="A bowl of salmon and curry">
      </picture>

- Use [cloudconvert.com](cloudconvert.com) to convert an image to `webP`.

### Art Direction

- Sometimes we need to show a zoomed in or a cropped version of an image for certain viewport sizes. This is the art direction problem.
- To handle this, we use the `picture` element with multiple `source` elements.
- Each `source` should contain a media condition and a `srcset`. The browser will pick the first `source` element whose media condition matches.

      <picture>
        <source media="(max-width: 500px)" srcset="images/meal-cropped.jpg" />
        <source media="(min-width: 501px)" srcset="images/meal.jpg" />
        <img src="images/meal.jpg" alt="A bowl of salmon and curry">
      </picture>

### Scalable Vector Graphics (SVG)

- SVG files are great for logos, icons, simple graphics and backgrounds with patterns.
- They are often very small and can scale without losing quality. You can get find plenty of beautiful SVG backgrounds on [https://svgbackgrounds.com](https://svgbackgrounds.com)

### Font Icons

- We can also use icon fonts for displaying icons.
- The most popular icon fonts are
  - Font Awesome
  - Ionicons
  - Material Design Icons

---

# Transformations, Transitions, and Animations

## Transformations

- Using the `transform` property, we can apply one or more transformations to an element.

  - `rotate()`

    - Rotate elements

          transform: rotate(15deg);

  - `scale()`

    - Make elements larger/smaller

          transform: scale(1.5);

  - `skew()`

    - Tilt elements to left/right

          transform: skew(15deg);

  - `translate()`

    - Position/move elements on the screen.

          transform: translate(10px);   /* Move in the horizontal axis */
          transform: translate(10px 10px);   /* Move in both horizontal and vertical axis */

- We can also combine these transformation functions

      .box:hover {
        transform: rotate(15deg) translateX(50px);
      }

## 3D Transformations

- `translate()`

      .box:hover {
        transform: perspective(200px) translateZ(50px);
      }

- `rotate()`

      .box:hover {
        transform: perspective(200px) rotateY(45deg);
        transform-origin: 0 0;
        // transform-origin: 0 50%;
      }

## Transitions

- The `transition` property is used to animate one or more properties.

## Animations

- To create a custom animation, first, we need to define the keyframes.

  - To define a keyframe rule, we use `@keyframes`

        @keyframes keyframe-name {

        }

- Each keyframe includes the list of styles to be applied at a given moment in time.
- Once we define the keyframes, we can use the animation property to animate an element.

### Reusable Animations

- [animate.style](animate.style) website contains a bunch of beautiful and reusable animations.

---

# Writing Clean, Maintable CSS

## CSS Best Practices

- Follow consistent naming convention.
- Create logical sections in the stylesheet.
- Avoid over-specific selectors.
- Avoid `!important` keyword.
- Sort CSS properties (i.e. ascending order). This makes it easier to read your code.
- Take advantage of style inheritance.
- Extract Repeatitive Patterns (Object-Oriented CSS)
  - Object-oriented CSS is a set of principles for creating reusable components.
  - The two principles in object-oriented CSS are:
    1. Separate container and content.
    2. Separate structure and skin.
- Avoid repetitive values by using CSS variables (keep it DRY)

  - CSS variables are also called **custom properties**.
  - We often declare variables using the `:root` pseudo-class selector that targets the `html` element.
  - We can then access these variables using the `var()` function. These custom properties get inherited by all the elements in the DOM.

        :root {
          --primary-color: grey;
        }

        .item {
          background: var(--primary-color);
        }

## BEM (Block Element Modifier)

- This is a popular naming convention for CSS classes.

      <div class="card">
        <header class="card__header"></header>
      </div>

- We use two hyphens to separate a block from a modifier (i.e. `<button class="btn btn--primary">Log In</button>`).
- We use two underscores to separate a block from an element (i.e. `<header class="card__header"></header>`).

- The idea of BEM is to think of our webpage as a bunch of blocks or components or modules.
  - These blocks can contain elements and can be modified.

## Modular/Component-based CSS

- The idea is to break down a page into a bunch of reusable components, and then compose those components together to build a complex layout.

### Banner/Hero Component

- A hero component contains elements like a heading, some text, a button and an image.

### Media Obect/Component

- A media component contains an image or an icon on the left side. On the right side it contains a heading and some text.

### Callout Component

- A callout component encourages to take people an action.

### Color Palette

- A color palette includes a primary, a secondary and often includes an accent color.
