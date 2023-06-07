// Изменение цвета иконок при наведении с помощью замены картинки


// Первая картинка
$(".widgets__img1").mouseover(function() {
    $(this).attr("src", "img/widgets/icons/1-active.png");
}).mouseleave(function() {
    $(this).attr("src", "img/widgets/icons/1-no-active.png");
});

// Вторая картинка
$(".widgets__img2").mouseover(function() {
    $(this).attr("src", "img/widgets/icons/2-active.png");
}).mouseleave(function() {
    $(this).attr("src", "img/widgets/icons/2-no-active.png");
});

// Третья картинка
$(".widgets__img3").mouseover(function() {
    $(this).attr("src", "img/widgets/icons/3-active.png");
}).mouseleave(function() {
    $(this).attr("src", "img/widgets/icons/3-no-active.png");
});

// Четвертая картинка
$(".widgets__img4").mouseover(function() {
    $(this).attr("src", "img/widgets/icons/4-active.png");
}).mouseleave(function() {
    $(this).attr("src", "img/widgets/icons/4-no-active.png");
});

// Пятая картинка
$(".widgets__img5").mouseover(function() {
    $(this).attr("src", "img/widgets/icons/5-active.png");
}).mouseleave(function() {
    $(this).attr("src", "img/widgets/icons/5-no-active.png");
});
