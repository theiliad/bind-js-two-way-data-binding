/* Vibe JS (alpha 1.0) | MIT */

var modalCalls = document.querySelectorAll('.em-Modal-Call');
var modalCallsArray = Array.prototype.slice.call(modalCalls,0);

modalCallsArray.forEach(function(el) {    
    if (document.getElementById(el.rel)) {
        el.onclick=function(){
                TweenMax.to(document.getElementById(el.rel), 0.1, {
                    opacity: 1,
                    autoAlpha: 1,
                    x: 0,
                    repeat: 0,
                    yoyo: true,
                    ease: Power4.easeIn
                })
                TweenMax.to(document.getElementById(el.rel).querySelector('.em-Modal-Content'), 0.1, {
                    opacity: 1,
                    autoAlpha: 1,
                    y: 0,
                    x: 0,
                    scale: 1,
                    repeat: 0,
                    delay: 0.1,
                    ease: Bounce.easeIn
                });
                
                setTimeout(function(){
                    var modalInput = document.getElementById(el.rel).querySelector('input');
                    modalInput.focus();
                }, 500);
                
                document.getElementById(el.rel).querySelector('.em-Modal-Content .em-Modal-Close').onclick=function(){
                    TweenMax.to(document.getElementById(el.rel), 0.1, {
                        opacity: 0,
                        autoAlpha: 0,
                        x: 0,
                        repeat: 0,
                        yoyo: true,
                        delay: 0.1,
                        ease: Power4.easeIn
                    })
                    TweenMax.to(document.getElementById(el.rel).querySelector('.em-Modal-Content'), 0.1, {
                        opacity: 0,
                        autoAlpha: 0,
                        y: 300,
                        x: 0,
                        scale: 0.5,
                        repeat: 0,
                        ease: Bounce.easeOut
                    });
                };
        };
    }
});