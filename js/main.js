var windowTop, windowHeight, steps = [], chartHeight;
init();
bindings();


function init() {
}

function getSteps() {
    $('.body__text-step').each(function(i, el) {
        steps.push($(el).attr('data-step'));
    }.bind(this));
}

function bindings() {
    $(window).scroll(function() {
        this.onScroll();
    }.bind(this));
}

function onScroll() {
    this.updateValues();
    this.fixMap();
    this.setStep();
}

function updateValues() {
    windowTop = window.pageYOffset || document.documentElement.scrollTop;
    windowHeight = $(window).height();
}

function fixMap() {
    if (windowTop > $('.body__text-start').offset().top - this.percentageOfHeight(5)) {
        $('.intro2').css('display', 'block');
    } else {
        $('.intro2').css('display', 'none');
    }
}

function setStep() {
    var stepToShow = null;
    $('.body__text-step').each(function(i, el) {
        if (windowTop > $(el).offset().top - this.percentageOfHeight(85)) {
            stepToShow = $(el).data('step');
        }
    }.bind(this));
    this.highlightStates(stepToShow);
}

function highlightStates(currentStep) {
    switch (currentStep) {
        case 2:
        $('.ball__fixed').css('opacity', '0');
        $('.young__fixed').css('opacity', '1');
        $('.arrow__fixed').css('opacity', '0');
        $('.image__fixed').css('width', '230px');
        $('.image__fixed').css('opacity', '0');
        break

        case 3:
        $('.image__fixed').css('width', '400px');
        $('.arrow__fixed').css('width', '200px');
        $('.arrow__fixed').css('opacity', '0');
        $('.ball__fixed').css('opacity', '0');
        $('.young__fixed').css('opacity', '0');
        $('.intro1').css('opacity', '0');
            $('.image__fixed').css('opacity', '1');
        break

        case 5:
        $('.image__fixed').css('width', '230px');
        $('.arrow__fixed').css('opacity', '0');
        break

        default:
        $('.ball__fixed').css('opacity', '0');
        $('.young__fixed').css('opacity', '0');
        $('.image__fixed').css('opacity', '1');
    }
}

function percentageOfHeight(percentage) {
    return (windowHeight / 100) * percentage;
}
