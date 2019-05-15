$(document).ready(function () {
    $('#MainSlider').flexslider({
        animation: "slide",
        slideshow: false,                //Включание автопроигрывания слайдшоу (true/false)
        animationDuration: 500,         //Скорость выполнения анимации, в миллисекундах
        animationLoop: true,
        directionNav: true,             //Включение навигации предыдущий/следующий (true/false)
        controlNav: false,               //Включение постраничной навигации (true/false)
        keyboardNav: true,
        //itemWidth: 156,
        //itemMargin: 28,              //Включение навигации с использованием клавиатуры(true/false)
        prevText: "<img src='/images/arrow_left.png' />",           //Текст для пункта "предыдущий" directionNav
        nextText: "<img src='/images/arrow_right.png' />",               //Текст для пункта "следующий" directionNav
        slideToStart: 0
    });
});