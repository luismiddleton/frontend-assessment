"use strict";

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}

var accordion = void 0,
  accordionHeader = void 0,
  accordionContainer = void 0;

accordion = document.getElementById("accordion");
accordionHeader = accordion.getElementsByTagName("h3");
accordionContainer = accordion.getElementsByTagName("div");

// loop header objects

var _loop = function _loop(i) {
  var headerItem = accordionHeader[i];
  var containerItem = accordionContainer[i];

  // set not-active for [1,2,3]
  if (!containerItem.hasAttribute("class", "active")) {
    containerItem.setAttribute("class", "not-active");
    headerItem.setAttribute(
      "class",
      "accordion-title accordion-title--not-active"
    );
  } else {
    headerItem.setAttribute("class", "accordion-title accordion-title--active");
  }

  headerItem.addEventListener("click", function(e) {
    // prevent default event
    e.preventDefault();

    // Shallow copy HTML elements to new array
    var arrContainer = [].concat(_toConsumableArray(accordionContainer));
    var arrHeader = [].concat(_toConsumableArray(accordionHeader));

    // get className for nextSibling
    var getClassName = accordionContainer[i].getAttribute("class");

    // rest all div container to not-active
    arrContainer.forEach(function(el) {
      el.setAttribute("class", "not-active");
    });

    arrHeader.forEach(function(el) {
      el.setAttribute("class", "accordion-title accordion-title--not-active");
    });

    if (getClassName === "not-active") {
      accordionContainer[i].setAttribute("class", "active");
      accordionHeader[i].setAttribute(
        "class",
        "accordion-title accordion-title--active"
      );
    }
  });
};

for (var i = 0; i < accordionHeader.length; i++) {
  _loop(i);
}
