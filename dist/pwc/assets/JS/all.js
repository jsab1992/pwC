$(document)
  .on("click", "[data-toggle = dropdown]", function () {
    var ddParent = $(this).closest(".dropdown");
    ddParent.toggleClass("open");
  })
  .on("mouseup", function (e) {
    // событие клика по веб-документу
    var ddElement = $(".dropdown .dropdown_wrap"); // тут указываем ID элемента
    if (
      !ddElement.is(e.target) && // если клик был не по нашему блоку
      ddElement.has(e.target).length === 0
    ) {
      // и не по его дочерним элементам
      ddElement.closest(".dropdown").removeClass("open"); // скрываем его
    }
  });
