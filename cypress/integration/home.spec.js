import SliderModel from '../models/slider.model';

describe('Test slider', () => {
    
    const slider = new SliderModel();

    beforeEach(() => {

        cy.visit('/')

    })

    it('slider should swipe auto after 5 seconds', async () => {

        const slides = await cy.fixture('slides.json');
        
        var currentSlide = slides[0]

        slider.$currentSlide.find('.picture .picture__image').should('have.attr', 'src', currentSlide.image.url)

        slider.$currentSlide.find('.picture .picture__caption').should('have.text', currentSlide.image.caption)

        slider.$currentSlide.find('.slide__title').should('have.text', currentSlide.title)

        slider.$currentSlide.find('.slide__content').should('have.text', currentSlide.content)

        slider.$controller.$buttons[1].should('have.class', '--active')

        cy.wait(5000)

        var currentSlide = slides[1]

        slider.$currentSlide.find('.picture .picture__image').should('have.attr', 'src', currentSlide.image.url)

        slider.$currentSlide.find('.slide__title').should('have.text', currentSlide.title)

        slider.$currentSlide.find('.slide__content').should('have.text', currentSlide.content)

        slider.$controller.$buttons[2].should('have.class', '--active')

    })

    it('Move slider by swiping', async () => {

        const slides = await cy.fixture('slides.json');
        
        var currentSlide = slides[0]

        slider.$currentSlide.find('.picture .picture__image').should('have.attr', 'src', currentSlide.image.url)

        slider.$currentSlide.find('.picture .picture__caption').should('have.text', currentSlide.image.caption)

        slider.$currentSlide.find('.slide__title').should('have.text', currentSlide.title)

        slider.$currentSlide.find('.slide__content').should('have.text', currentSlide.content)

        slider.$controller.$buttons[1].should('have.class', '--active')


        slider.$el.swipe('right')
        
        var currentSlide = slides[1]

        slider.$currentSlide.find('.picture .picture__image').should('have.attr', 'src', currentSlide.image.url)

        slider.$currentSlide.find('.slide__title').should('have.text', currentSlide.title)

        slider.$currentSlide.find('.slide__content').should('have.text', currentSlide.content)

        slider.$controller.$buttons[2].should('have.class', '--active')

        slider.$el.swipe('left')

        var currentSlide = slides[0]

        slider.$currentSlide.find('.picture .picture__image').should('have.attr', 'src', currentSlide.image.url)

        slider.$currentSlide.find('.picture .picture__caption').should('have.text', currentSlide.image.caption)

        slider.$currentSlide.find('.slide__title').should('have.text', currentSlide.title)

        slider.$currentSlide.find('.slide__content').should('have.text', currentSlide.content)

        slider.$controller.$buttons[1].should('have.class', '--active')

    })

    it('Move slider by controller', async () => {

        const slides = await cy.fixture('slides.json');
        
        var currentSlide = slides[0]

        slider.$currentSlide.find('.picture .picture__image').should('have.attr', 'src', currentSlide.image.url)

        slider.$currentSlide.find('.picture .picture__caption').should('have.text', currentSlide.image.caption)

        slider.$currentSlide.find('.slide__title').should('have.text', currentSlide.title)

        slider.$currentSlide.find('.slide__content').should('have.text', currentSlide.content)

        slider.$controller.$buttons[1].should('have.class', '--active')

        slider.$controller.showSlide(2)

        var currentSlide = slides[1]

        slider.$currentSlide.find('.picture .picture__image').should('have.attr', 'src', currentSlide.image.url)

        slider.$currentSlide.find('.slide__title').should('have.text', currentSlide.title)

        slider.$currentSlide.find('.slide__content').should('have.text', currentSlide.content)

        slider.$controller.$buttons[2].should('have.class', '--active')

        slider.$el.swipe('left')

        var currentSlide = slides[0]

        slider.$currentSlide.find('.picture .picture__image').should('have.attr', 'src', currentSlide.image.url)

        slider.$currentSlide.find('.picture .picture__caption').should('have.text', currentSlide.image.caption)

        slider.$currentSlide.find('.slide__title').should('have.text', currentSlide.title)

        slider.$currentSlide.find('.slide__content').should('have.text', currentSlide.content)

        slider.$controller.$buttons[2].should('have.class', '--active')

    })

})