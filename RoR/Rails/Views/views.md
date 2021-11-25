## Creating Response

In controller, there are three ways to create an HTTP response:

1. Call `render` to create a full response to send back to the browser
2. Call `redirect_to` to send an HTTP redirect status code to the browser
3. Call `head` to create a response consisting solely of HTTP headers to send back to the browser
