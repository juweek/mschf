var windowTop, windowHeight, steps = [], chartHeight;
init();
bindings();


function init() {
    this.onScroll();
}

function getSteps() {
    $('.comic__main--text--step').each(function(i, el) {
        steps.push($(el).attr('data-step'));
    }.bind(this));

}

function bindings() {
    $(window).scroll(function() {
        this.onScroll();
    }.bind(this));

    $(document).on('input', '#myRange', function() {
        var num = 50 / $(this).val();
        var bruh = -.7;
        $('.raindrop__fixed').each(function(i, el) {
            setTimeout( function(){
                $(el).css('animation', 'raindrop ' + num + 's linear infinite');
                $(el).css('animation-delay', bruh + 's');
                bruh = bruh - .4;
            },200);
        }.bind(this));
        $('.waves__fixed').css('animation', 'move ' + num + 's linear infinite alternate');
    });
}

function onScroll() {
    this.updateValues();
    this.setStep();
}

function updateValues() {
    windowTop = window.pageYOffset || document.documentElement.scrollTop;
    windowHeight = $(window).height();
}

function fixMap() {
    if (windowTop > $('.comic__main--text--start').offset().top - this.percentageOfHeight(5)) {
        $('.intro2').css('display', 'block');
    } else {
        $('.intro2').css('display', 'none');
    }
}

function setStep() {
    var stepToShow = null;
    $('.comic__main--text--step').each(function(i, el) {
        if (windowTop > $(el).offset().top - this.percentageOfHeight(85)) {
            stepToShow = $(el).data('step');
        }
    }.bind(this));
    this.highlightStates(stepToShow);
}

function highlightStates(currentStep) {
    switch (currentStep) {

        case 0:
        $('.page__1').addClass('image__shown');
        $('.page__0').addClass('image__shown');
        $('.page__6').removeClass('image__shown');
        $('.page__2').removeClass('image__shown');
        break

        case 1:
        $('.page__2').addClass('image__shown');
        $('.scene__3').removeClass('image__shown');
        $('.page__0').removeClass('image__shown');
        $('.page__6').removeClass('image__shown');
        $('.page__1').addClass('image__shown');
        break

        case 1.5:
        $('.page__1').removeClass('image__shown');
        $('.page__2').removeClass('image__shown');
        $('.page__3').removeClass('image__shown');
        $('.page__5').removeClass('image__shown');
        $('.page__6').addClass('image__shown');
        $('.page__8').removeClass('image__shown');
        break

        case 2:
        $('.page__3').addClass('image__shown');
        $('.scene__3').removeClass('image__shown');
        $('.page__5').removeClass('image__shown');
        $('.page__1').removeClass('image__shown');
        break

        case 3:
        $('.page__4').addClass('image__shown');
        $('.page__3').removeClass('image__shown');
        $('.page__2').removeClass('image__shown');
        $('.page__5').removeClass('image__shown');

        $('.cloud__fixed').css('opacity', '0');
        break

        case 4:
        $('.page__5').addClass('image__shown');
        $('.page__1').removeClass('image__shown');
        $('.page__3').removeClass('image__shown');
        $('.page__2').removeClass('image__shown');
        $('.scene__3').removeClass('image__shown');
        $('.page__6').removeClass('image__shown');
        $('.page__8').removeClass('image__shown');
        break

        case 5:
        $('.page__5').removeClass('image__shown');
        $('.page__6').removeClass('image__shown');
        $('.page__8').addClass('image__shown');
        $('.page__4').removeClass('image__shown');
        $('.page__5').removeClass('image__shown');

        break

        case 6:
        $('.page__7').addClass('image__shown');
        $('.page__2').removeClass('image__shown');
        break

        default:
        $('.page__1').removeClass('image__shown');
        $('.page__0').removeClass('image__shown');
        $('.young__fixed').css('opacity', '0');
    }
}

function percentageOfHeight(percentage) {
    return (windowHeight / 100) * percentage;
}
