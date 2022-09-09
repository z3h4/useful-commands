const collapsibles = document.querySelectorAll('.collapsible'); // `document` object is the reference to the current page.
collapsibles.forEach(item =>
  item.addEventListener('click', function () {
    this.classList.toggle('collapsible--expanded');
  })
);
