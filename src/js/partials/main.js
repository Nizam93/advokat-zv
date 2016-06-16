var param = {
    windowWidth: 0,
    windowHeight: 0,
    minheaderHeight: 600
};
var block = {
    header: $('header'),
    dropdown: $('.dropdown')
};

function setDynamicParams() {
    param.windowWidth = $(window).width();
    param.windowHeight = $(window).height();
}

function setHeaderSize() {
    block.header.width(param.windowWidth);
    if (param.windowWidth > 767) {
        if (param.windowHeight > param.minheaderHeight) {
            block.header.height(param.windowHeight);
        } else {
            block.header.height(param.minheaderHeight);
        }
    } else {
        block.header.height('auto');
    }
}

function setSlidingEffectToDropdowns() {
    var slidingSpeed = 200;
    if (param.windowWidth > 767) {
        block.dropdown.on('show.bs.dropdown', function (e) {
            $(this).find('.dropdown-menu').first().stop(true, true).slideDown(slidingSpeed);
        });
        block.dropdown.on('hide.bs.dropdown', function (e) {
            $(this).find('.dropdown-menu').first().stop(true, true).slideUp(slidingSpeed);
        });
    }
}

$(document).ready(function () {
    setDynamicParams();
    setHeaderSize();
    setSlidingEffectToDropdowns();
});

$(window).resize(function () {
    setDynamicParams();
    setHeaderSize();
});