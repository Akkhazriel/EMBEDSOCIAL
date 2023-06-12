// Изменение цвета иконок при наведении с помощью замены картинки

// Первая картинка
$(".widgets__img1")
  .mouseover(function () {
    $(this).attr("src", "img/widgets/icons/1-active.png");
  })
  .mouseleave(function () {
    $(this).attr("src", "img/widgets/icons/1-no-active.png");
  });

// Вторая картинка
$(".widgets__img2")
  .mouseover(function () {
    $(this).attr("src", "img/widgets/icons/2-active.png");
  })
  .mouseleave(function () {
    $(this).attr("src", "img/widgets/icons/2-no-active.png");
  });

// Третья картинка
$(".widgets__img3")
  .mouseover(function () {
    $(this).attr("src", "img/widgets/icons/3-active.png");
  })
  .mouseleave(function () {
    $(this).attr("src", "img/widgets/icons/3-no-active.png");
  });

// Четвертая картинка
$(".widgets__img4")
  .mouseover(function () {
    $(this).attr("src", "img/widgets/icons/4-active.png");
  })
  .mouseleave(function () {
    $(this).attr("src", "img/widgets/icons/4-no-active.png");
  });

// Пятая картинка
$(".widgets__img5")
  .mouseover(function () {
    $(this).attr("src", "img/widgets/icons/5-active.png");
  })
  .mouseleave(function () {
    $(this).attr("src", "img/widgets/icons/5-no-active.png");
  });

// Slider

$(document).ready(function () {
  let owl = $(".owl-carousel");
  owl.owlCarousel({
    loop: true,
    margin: 10,
    responsive: {
      0: {
        items: 4,
      },
      600: {
        items: 4,
      },
      900: {
        items: 4,
      },
    },
  });

  owl.on("mousewheel", ".owl-stage", function (e) {
    if (e.deltaY > 0) {
      owl.trigger("prev.owl");
    } else {
      owl.trigger("next.owl");
    }
    e.preventDefault();
  });
});

// PRICE LINKS ACTIVE
$('.price__link').click(function () {
  $('.price__link').removeClass('active');
  $(this).addClass('active');
})

// PRICE ITEM ACTIVE

const priceItems = document.querySelectorAll('.price__item'); // получаем все блоки price__item

for (let i = 0; i < priceItems.length; i++) {
  const priceItem = priceItems[i];

  // навешиваем обработчик события на каждый блок price__item
  priceItem.addEventListener('click', function() {
    // убираем класс active со всех блоков price__item
    for (let j = 0; j < priceItems.length; j++) {
      priceItems[j].classList.remove('active');
      priceItems[j].querySelector('.price__item-btn').classList.remove('active');
    }

    // добавляем класс active на текущий блок price__item и на его дочерний элемент .price__item-btn
    priceItem.classList.add('active');
    priceItem.querySelector('.price__item-btn').classList.add('active');
  });
}

// PRICE QUESTIONS
const questionsItems = document.querySelectorAll('.price__questions-item');

for (let i = 0; i < questionsItems.length; i++) {
  const questionsItem = questionsItems[i];

  questionsItem.addEventListener('click', function() {
    for (let j = 0; j < questionsItems.length; j++) {
      const questionsDesc = questionsItems[j].querySelector('.price__questions-desc');
      if (questionsDesc) {
        questionsDesc.classList.remove('active');
      }
      
      const questionsImg = questionsItems[j].querySelector('img');
      if (questionsImg) {
        questionsImg.src = 'img/price/arrow-close.png';
      }
    }

    const activeQuestionsDesc = questionsItem.querySelector('.price__questions-desc');
    if (activeQuestionsDesc) {
      activeQuestionsDesc.classList.add('active');
    }

    const activeQuestionsImg = questionsItem.querySelector('img');
    if (activeQuestionsImg) {
      activeQuestionsImg.src = 'img/price/arrow-open.png';
    }

  });
}