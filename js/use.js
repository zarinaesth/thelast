function changeSize() {
  var element = document.getElementById('sendButton');
    var currentSize = getComputedStyle(element).fontSize;
    var newSize = parseFloat(currentSize) * 1.05;

    element.style.fontSize = newSize + 'px';
  }

  function resetSize() {
    var element = document.getElementById('sendButton');
    element.style.fontSize = ''; 
  }