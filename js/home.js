document.getElementById('scrollImage').addEventListener('click', function() {
    var targetElement = document.getElementById('scrollTarget');
    targetElement.scrollIntoView({ behavior: 'smooth' });
});