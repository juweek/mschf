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

        case 0:
        $('.image__fixed').css('opacity', '1');
        $('.image__fixed').css('display', 'block');
        $('.ball__fixed').css('opacity', '0');
        $('.notes__fixed').css('opacity', '0');
        $('.young__fixed').css('opacity', '0');
        $('.city__fixed').css('opacity', '1');

        break

        case 1:
        $('.image__fixed').css('opacity', '1');
        $('.young__fixed').css('opacity', '0');
        $('.ball__fixed').css('opacity', '1');
        $('.notes__fixed').css('opacity', '1');
        $('.cloud__fixed').css('opacity', '0');
        $('.city__fixed').css('opacity', '0');
        $('.art__fixed').css('opacity', '0');
        $('.art__fixed').css('display', 'none');
        $('.laptop__fixed').css('display', 'none');
        $('.laptop__fixed').css('opacity', '0');
        break

        case 1.5:
        $('.ball__fixed').css('opacity', '0');
        $('.image__fixed').css('opacity', '1');
        $('.notes__fixed').css('opacity', '0');
        $('.art__fixed').css('opacity', '1');
        $('.art__fixed').css('display', 'block');
        $('.laptop__fixed').css('display', 'block');
        $('.laptop__fixed').css('opacity', '1');
        $('.young__fixed').css('opacity', '0');
        $('.young__fixed').css('display', 'none');
        $('.cloud__fixed').css('opacity', '0');
        $('.image__fixed').css('display', 'block');
        break

        case 2:
        $('.young__fixed').css('display', 'block');
        $('.young__fixed').css('opacity', '1');
        $('.arrow__fixed').css('opacity', '0');
        $('.image__fixed').css('opacity', '0');
        $('.image__fixed').css('display', 'none');
        $('.ball__fixed').css('opacity', '0');
        $('.notes__fixed').css('opacity', '0');
        $('.cloud__fixed').css('opacity', '1');
        $('.rain_cloud__fixed').css('opacity', '0');
        $('.raindrop__fixed').css('opacity', '0');
        $('.art__fixed').css('opacity', '0');
        $('.art__fixed').css('display', 'none');
        $('.laptop__fixed').css('opacity', '0');
        $('.laptop__fixed').css('display', 'none');
        break

        case 3:
        $('.arrow__fixed').css('opacity', '0');
        $('.young__fixed').css('opacity', '0');
        $('.intro1').css('opacity', '0');
        $('.image__fixed').css('opacity', '0');
        $('.cloud__fixed').css('opacity', '0');
        $('.tools__fixed').css('opacity', '1');
        $('.rain_cloud__fixed').css('opacity', '0');
        $('.raindrop__fixed').css('opacity', '0');
        break

        case 4:
        $('.image__fixed').css('opacity', '0');
        $('.young__fixed').css('opacity', '0');
        $('.tools__fixed').css('opacity', '0');
        $('.cloud__fixed').css('opacity', '0');
        $('.rain_cloud__fixed').css('opacity', '1');
        $('.raindrop__fixed').css('opacity', '1');
        break

        case 5:
        $('.image__fixed').css('width', '230px');
        $('.arrow__fixed').css('opacity', '0');
        break

        default:
        $('.ball__fixed').css('opacity', '0');
        $('.notes__fixed').css('opacity', '0');
        $('.young__fixed').css('opacity', '0');
        $('.image__fixed').css('opacity', '0');
        $('.city__fixed').css('opacity', '0');
    }
}

function percentageOfHeight(percentage) {
    return (windowHeight / 100) * percentage;
}
