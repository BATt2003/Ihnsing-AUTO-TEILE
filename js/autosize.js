document.querySelectorAll('img').forEach(img => {
  img.onload = function() {
    this.setAttribute('width', this.naturalWidth);
    this.setAttribute('height', this.naturalHeight);
  };
});
