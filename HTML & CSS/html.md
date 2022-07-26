# How the Web Works

## What happens when you type a URL into your browser?

1. Our browser sends an HTTP request to the server and receives an HTTP response.
2. This response includes an HTML document.
3. The browser reads that HTML document to construct a Document Object Model (DOM) and render the page.
4. As the browser reads the HTML document, it discovers references to other resources in this document, like images, fonts etc.
5. Each of these resources has an address or an url.
6. So for each resource, the browser sends a separate HTTP request to the server to fetch that resource.
7. Many of these HTTP requests are sent in parallel, so we can see the page as quickly as possible.
8. Once the browser has all the necessary resources, it will render the HTML document.
   - Rendering an HTML document means displaying it.

- [What happens when you type a URL into your browser?](https://aws.amazon.com/blogs/mobile/what-happens-when-you-type-a-url-into-your-browser/)

# HTML

- HTML (Hypertext Markup Language) is a markup language used to define the **structure** and **contents** of web pages.
- We use HTML to define the building blocks of our webpages.
- HTML is not a case sensitive language.
  - Conventionally, we type everything in lowercase, except `DOCTYPE`.

# HTTP

- HTTP (Hypertext Transfer Protocol) is a set of rules that clients and servers use to communicate and exchange data over the internet.
- HTTPS = HTTP + encryption

# DOM

- Document object model is a model that represents the objects or elements (i.e. paragraphs, images, links) in our HTML document.
- It is an in-memory representation of the elements on the page

**`DOCTYPE` Declaration:** `<!DOCTYPE html>` says the browser that this is a HTML5 document.

    <!DOCTYPE html>
    <html>
      <head>
        <title>google</title>
      </head>
      <body></body>
    </html>

## `<html>` element

- Inside the `html` element, we define the structure of a web page.
- As a best practice we add `lang` attribute with `html` element to tell the search engine that what is the language of the webpage.

      <html lang="en">

## `<head>` element

- We use the `<head>` element to give browsers and search engines information about a web page.
- Inside the `<head>` element we can declare `<style>` element to define CSS styles.
- We use `<meta>` elements for giving information about the web page.

      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">

### Character Set

- Computers don't understand characters like A, B, C etc. They only understand numbers which are represented in the binary format.
- So, by using a character set, we can map a character to a numeric value.
- The first character set that was designed was `ASCII` character set.
  - `ASCII` can only represent the characters in the English language.
- The character set we use most these days is `UTF-8` which can represent almost all characters in the world.

### Viewport

- `viewport` is the visible area of a web page.
- We need this element so our webpages look good on all devices - desktops, tablets, mobiles etc.

## `<body>` element

- Here we add elements that would appear on our page

### Text

### `<p>`

### `<em>`

- The `<em>` element is used to define emphasized text.
- This helps search engines extract important content in our documents.
- By default, emphasized text is displayed in italic.
  - But don't use `<em>` to display Italic text.
  - Anything to do with styling should be done in CSS.

### `<strong>`

- The `<strong>` element is used to represent important content.
- Browsers, by default, render strong content in bold.
- Conceptually, it's similar to `<em>`. So, where we should use `<em>` and `<strong>` depend's on the context.

### `<i>` and `<b>`

- The `<i>` and `<b>` elements are considered deprecated because HTML should not be used for styling. That’s the role of CSS.

### Heading

- In HTML we have 6 heading elements
- Headings are represented using `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`.
- We should use these headings to create a hierarchy. Otherwise it'll confuse the search engine.
- Every web page should have one and only one `<h1>` element.
- Headings should have a natural hierarchy and should not be skipped. We should not use `<h4>` after `<h1>`, we should use `<h2>`.
- The better we can represent the structure of our document using HTML, the better search engines can read and understand our content.

### Entities

- Some characters are reserved in HTML.
- Entities are used to display special characters such as angle brackets, copyright symbol, etc.
- All the entities start with `&` and ends with `;`
- The most important entities are:
  - `&nbsp;` (non-breaking space)
  - `&lt;` (less than sign)
  - `&gt;` (greater than sign)
  - `&copy;` (copyright symbol)

### Hyperlinks

- The `<a>` (anchor) element, with its `href` attribute, is used to create a hyperlink to web pages, locations in the same page, files and email addresses.
- `<a>` has an attribute `download`. If we want to let's say download an image on a link click, we can use this attribute.

      <a href="images/my-image.jpg" download>My Photo</a>

- We can use `id` in `href` to link to other part of the page

      <a href="#my-image">My Photo</a>

- Jump to the top of the page

      <a href="#">Jump to top</a>

- Link to external url

  - Url should start with a protocol (eg `http://`) to represent a resource on a different website.

              <a href="https://google.com">Google</a>

  - If we want the new page to be opened in a new browser tab

          <a href="https://google.com" target="_blank">Google</a>

- Link to emails

      <a href="mailto:zahid@gmail.com">Email Me</a>

- What is the difference between a link and a hyperlink

  - A link is just an address, a url, the location of the target page.
  - A hyperlink is the element that the user can click on to navigate to the target page.
  - Quite often these terms are used interchangably.

### Images

- The `<img>` element is used to display an image.
- The `<img>` element does not have a closing tag because they cannot have any child element.
- It’s a common best practice to set the `alt` (alternative text) attribute.
  - This helps visually impaired people understand the page content.
  - It helps search engines read this text and understand what we are providing here.
  - Also, if the image cannot be loaded, the alternative text is displayed.
- Provide descriptive name to the images so that search engine can better understand and index our pages.

      <img src="images/coffee.jpg" alt="A coffee mug on a table">

- We use the css property `object-fit: cover` so that the image cover the entire containing box.
  - When we set this property our image gets resized and will potentially crop so it covers the entire containing box.
  - This fixes the problem when we set the size of and image, but it gets squashed.

### Video and Audio

- The `<video>` and `<audio>` elements are used to display video and audio. These elements have boolean attributes such as `controls`, `autoplay` and `loop`.

      <video src="videos/ocean.mp4" controls>
        Your browser doesn't support videos.
      </video>

- **Attributes**

  - **`controls`** shows the control buttons.
  - **`autoplay`** video automatically starts when the page is loaded.
  - **`loop`** video will automatically loop.

- For styling, set the width using css. We don't have to set the height, the browser will automatically calculate the height based on the aspect ratio of the video.
- We should provide a fallback text if the browser doesn't support the `<video>` element.
- In the website caniuse.com we can find out how different browsers supports various HTML and CSS features.

### Lists

- In HTML we have 3 types of list elements.

  - The `<ul>` element is used to represent an unordered list, where the order of items doesn’t matter.
    - Common application of this element is in implementing navigation menus.
    - **Styles**
      - `list-style-type: square;` use square box as bullet point.
      - `list-style-type: none;` Don't use bullet point.
  - The `<ol>` element is used to represent an ordered list of items.
  - The `<dl>` (description list) element is used to implement a glossary or to display metadata.

    - So, we can have a term and some details about that term.
    - Inside `<dl>` we have `<dt>` (description term) and `<dd>` (description details)

          <dl>
            <dt>HTML</dt>
            <dd>Hypertext Markup Language</dd>
          </dl>

- `<li>` is short for list item.

### Table

- The `<table>` element should only be used to represent tabular data.
- A table can have zero or more `<tr>` (table row) elements.
- Each `<tr>` element can have zero or more cells.
- Cells can be data cells (`<td>`) or header cells (`<th>`).
- **CSS styles**:

  - `border-collapse: collapse` collapse the border in the neighboring cells.
  - `colspan: 2` how many columns the cell should expand to.

- Difference between header and data cells in terms of styling?
  - By default, in the header (and footer) cells the text is bold and aligned in the center. In contrast, in the data cells texts are aligned to the left.

### Containers

- Quite often we need to group a bunch of elements for styling purposes.
- In HTML we have a few container elements. `<div>` and `<span>` are general purpose containers.
  - `<div>` (division)
    - `<div>` is a block-level element. A block-level element always starts on a new line and fill up the entire available space.
  - `<span>`
    - It is often used for styling texts.
    - `<span>` is an inline element. So, it does not take up the entire width of the page.

### Semantic Elements

- Semantic elements help us write markup that is more meaningful and descriptive to search engines, screen readers and other software.
- So, use `<div>` and `<span>` elements when no other semantic element is appropriate.
- The semantic elements in HTML5 are:
  - `<header>`
    - Represents introductory content.
    - We can use `<header>` inside a page, `<section>` or `<article>`
  - `<footer>`
    - Same as `<header>`
  - `<nav>`
    - Navigation bar
  - `<main>`
    - Represents main content of the page.
    - Every page can have only 1 main element.
  - `<aside>`
    - Represent contents not directly related to the main content.
    - If we want to have a sidebar for advertising or other contents that is not directly related to the main content.
  - `<article>`
    - This element represents an article.
  - `<section>`
    - Group related contents.
    - Every `<section>` should have a heading.
  - `<figure>`
    - This is just a container for figures.
  - `<mark>`
    - Highlights or mark contents.
  - `<time>`

### Structuring web pages

- Most web pages have at least 3 building blocks. `<header>`, `<main>` and `<footer>`.
- Structure:
  - `<header>`
    - `<nav>`
  - `<main>`
    - `<section>`
      - `<h2>`
      - `<article>`
      - `<article>`
    - `<section>`
  - `<aside>`
  - `<footer>`

# Validating Web pages

- Using validation services we can ensure that our HTML/CSS code is valid and follows the official rules. This helps us get better rankings in search engines.
- Validate html at http://validator.w3.org/
- Validate css at https://jigsaw.w3.org/css-validator/

- In HTML5 we can generate text using lorem and then specifying how many characters we want. For example, if we want random text with 50 characters,

      lorem50
