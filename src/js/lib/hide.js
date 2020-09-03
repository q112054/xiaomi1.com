let hideElement = function (selector, hideSelector) {
    selector.hover(
        function () {
            hideSelector.addClass('show').removeClass('hide');
        },
        function () {
            hideSelector.addClass('hide').removeClass('show');
        })
}


let hideHeight = function (selector, hideSelector,height) {
    selector.hover(
        function () {
            hideSelector.css('height',height)
        },
        function () {
            hideSelector.css('height',0);
        })
}
let hideWidth = function (selector, hideSelector,width) {
    selector.hover(
        function () {
            hideSelector.css('width',width)
        },
        function () {
            hideSelector.css('width',0);
        })
}
export { hideElement,hideHeight,hideWidth };