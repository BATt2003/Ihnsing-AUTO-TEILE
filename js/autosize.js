
// Проставляет width/height всем изображениям принудительно
document.querySelectorAll('img:not([width]):not([height])').forEach(img => {
  img.onload = function() {
    this.setAttribute('width', this.naturalWidth);
    this.setAttribute('height', this.naturalHeight);
  };

});
