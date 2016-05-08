/* Bind JS (alpha 1.0) | MIT */

var emModelTags = document.querySelectorAll('[em-model]');
var emModelArray = Array.prototype.slice.call(emModelTags, 0);

var emBindTags = document.querySelectorAll('[em-bind]');
var emBindArray = Array.prototype.slice.call(emBindTags, 0);

emModelArray.forEach(function (el) {    
    emBindArray.forEach(function (ej) {
        if (ej.getAttribute("em-bind") == el.getAttribute("em-model")) {
            el.value = ej.textContent;
            
            el.onkeyup = el.onkeydown = el.onkeypress = el.onchange = el.onmousedown = el.onmouseup = function(event) {
                if (el.tagName.toLowerCase() == "input") {
                    emBindArray.forEach(function (ek) {
                        if (ej.getAttribute("em-bind") == ek.getAttribute("em-bind")) {
                            ek.textContent = el.value;
                        }
                    });
                }
            }

        }
    });
});