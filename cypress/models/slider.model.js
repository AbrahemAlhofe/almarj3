class SliderControllerModel {

    constructor () {}

    get $el () {
        return cy.get('.slider .slider__controller')
    }


    get $buttons () {
        return new Proxy({}, {
            get: function(target, index, receiver) {
                return cy.get('.controller__button').eq(index)
            }
        })
    }

    showSlide (index) {
        this.$buttons[index].click()
    }   

}

export default class SliderModel {

    constructor () {}

    get $el () {
        return cy.get('.slider')
    }

    get $currentSlide () {
        return this.$el.find('.slide')
    }

    get $controller () {
        return new SliderControllerModel();
    }

}