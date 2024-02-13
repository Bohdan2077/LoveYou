function enlargeButton() {
    var image = document.querySelector('.cat');
    image.src = "/sym.gif";

    var buttons = document.querySelectorAll('.buttons .button_1');
    buttons.forEach(function(button) {
        var currentWidth = parseFloat(window.getComputedStyle(button).width);
        var currentHeight = parseFloat(window.getComputedStyle(button).height);
        button.style.width = (currentWidth * 1.3) + 'px';
        button.style.height = (currentHeight * 1.3) + 'px';
    });
    var buttons = document.querySelectorAll('.buttons .button_2');
    buttons.forEach(function(button) {
        var currentWidth = parseFloat(window.getComputedStyle(button).width);
        var currentHeight = parseFloat(window.getComputedStyle(button).height);
        button.style.width = (currentWidth * 0.9) + 'px';
        button.style.height = (currentHeight * 0.9) + 'px';
    });
};


function enlargeButton2() { 
    var buttons = document.querySelector('.buttons');
    var image = document.querySelector('.cat');
    var mainText = document.querySelector('.main_text_tariffs');
    
    image.src = "/hap.gif";
    buttons.style.display = 'none';
    mainText.textContent = "УРАААААААААААААААА!!!!!!";
}
