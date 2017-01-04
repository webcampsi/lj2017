/*globals $:false, ScrollMagic:false, Linear:false, TweenMax:false */

$(document).foundation();
var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({triggerElement: ".trigger", triggerHook: 0, offset: -100})
    .setTween(TweenMax.to(
        '.animation-keyboard', 0.5,
        {
            css: {
                left: '-=500vh',
                display: 'none'
            },
            ease: Linear.easeInOut
        }
    ))
    .addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({triggerElement: ".trigger", triggerHook: 0, offset: -100})
    .setTween(TweenMax.to(
        '.animation-monitors', 1.5,
        {
            css: {
                left: '-=500vh',
                display: 'none'
            },
            ease: Linear.easeInOut
        }
    ))
    .addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({triggerElement: ".trigger", triggerHook: 0, offset: -100})
    .setTween(TweenMax.to(
        '.animation-mouse', 1.5,
        {
            css: {
                left: '+=500vh',
                display: 'none'
            },
            ease: Linear.easeInOut
        }
    ))
    .addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({triggerElement: ".trigger", triggerHook: 0, offset: -100})
    .setTween(TweenMax.to(
        '.animation-text', 1.5,
        {
            css: {
                opacity: 1
            },
            ease: Linear.easeInOut
        }
    ))
    .addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({triggerElement: ".trigger", triggerHook: 0, offset: -100})
    .setTween(TweenMax.from(
        '.animation-bubbles1', 1,
        {
            css: {
                left: '-=500vh'
            },
            ease: Linear.easeInOut
        }
    ))
    .addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({triggerElement: ".trigger", triggerHook: 0, offset: -100})
    .setTween(TweenMax.from(
        '.animation-bubbles3', 1,
        {
            css: {
                left: '+=500vh'
            },
            ease: Linear.easeInOut
        }
    ))
    .addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({triggerElement: ".trigger", triggerHook: 0, offset: -100})
    .setTween(TweenMax.from(
        '.animation-desk', 1,
        {
            css: {
                left: '+=500vh'
            },
            ease: Linear.easeInOut
        }
    ))
    .addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({triggerElement: ".trigger", triggerHook: 0, offset: -100})
    .setTween(TweenMax.from(
        '.animation-bubbles2', 1,
        {
            css: {
                left: '+=500vh'
            },
            ease: Linear.easeInOut
        }
    ))
    .addIndicators()
    .addTo(controller);

// new ScrollMagic.Scene({triggerElement: ".trigger-small", triggerHook: 0, offset: -100})
//     .setTween(TweenMax.to(
//         '.animation-text', 1.5,
//         {
//             css: {
//                 opacity: 1
//             },
//             ease: Linear.easeInOut
//         }
//     ))
//     .addIndicators()
//     .addTo(controller);