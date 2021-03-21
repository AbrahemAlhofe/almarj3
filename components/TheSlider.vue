<i18n lang='yaml'>
  ar:
    slides :
      -
        title : ما هي الرأسمالية
        content : لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو الألم ولكن نتيجة لظروف ما قد تكمن السعاده فيما نتحمله من كد وأسي.
        image :
          url : "/images/slider/slide-1.png"
          caption : أدم سميث - مؤسس الرأسمالية
        path : ["المقدمة", "ما هو البرلمان"]

      -
        title : ما هي الشيوعية
        content : لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو الألم ولكن نتيجة لظروف ما قد تكمن السعاده فيما نتحمله من كد وأسي.
        image :
          url : "/images/slider/slide-2.png"
          caption : كارل ماركس - مؤسس الشيوعية
        path : ["المقدمة", "ما هو الدولة"]

      -
        title : ما هي ما هي البطاطس
        content : لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو الألم ولكن نتيجة لظروف ما قد تكمن السعاده فيما نتحمله من كد وأسي.
        image :
          url : "/images/slider/slide-2.png"
          caption : كارل ماركس - مؤسس ما هي البطاطس
        path : ["المقدمة", "ما هو الدولة"]

</i18n>
<template lang="pug">
    .slider
        .slide

            .picture
                img.picture__image( :src='currentSlide.image.url' )
                .picture__caption {{ currentSlide.image.caption }}

            .slide__info
                .slide__title {{ currentSlide.title }}
                .slide__content {{ currentSlide.content }}
                .slide__path
                  template( v-for='(category, index) in currentSlide.path' )
                    span {{ category }}
                    span.arrow( v-if='index % 2 === 0' ) &nbsp;>&nbsp;

        .slider__controller: TheSliderController(  v-model='currentSlideIndex' :length='slidesLength' )
</template>
<script>
import onSwipe from '@/compositions/onSwipe'

export default {
  data () {
    return {
      currentSlideIndex: 0,
      autoMove: true,
      autoMoveInterval: null
    }
  },
  computed: {
    slidesLength () {
      return Object.keys(this.$t('slides')).length
    },
    currentSlide () {
      return this.$t(`slides.${this.currentSlideIndex}`)
    }
  },
  watch: {
    autoMove: {
      handler (isAutoMove) {
        if (isAutoMove) {
          this.autoMoveInterval = setInterval(() => { this.nextSlide() }, 4000)
        } else {
          clearInterval(this.autoMoveInterval)
        }
      },
      immediate: true
    }
  },
  mounted () {
    onSwipe((direction) => {
      if (direction === 'left') { this.prevSlide() }
      if (direction === 'right') { this.nextSlide() }
    })
  },
  methods: {
    showSlide (slideIndex) {
      this.currentSlideIndex = Number(slideIndex)
    },
    nextSlide () {
      let nextSlideIndex = this.currentSlideIndex + 1
      if (nextSlideIndex > this.slidesLength - 1) { nextSlideIndex = 0 }
      this.currentSlideIndex = nextSlideIndex
    },
    prevSlide () {
      let prevSlideIndex = this.currentSlideIndex - 1
      if (prevSlideIndex < 0) { prevSlideIndex = this.slidesLength - 1 }
      this.currentSlideIndex = prevSlideIndex
    }
  }
}
</script>
<style lang="scss">
.slider {

    width : 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;

    .slide {

        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;

        box-sizing: border-box;
        padding: 1em;

        &__path {

          color: rgb( var(--gray-500) );
          text-decoration: underline;

          .arrow {

            color: rgb( var(--blue-100) );
            font-weight: bold;
            font-family: cursive;

          }

        }

        &__title {

            font-size: min(10vw, 4em);
            font-weight: bold;

            padding: 0.4em;

            border-right: 5px solid rgb( var(--blue-100) );

          }

        &__content {

          $max-line: 5;
          $line-height: 1.5em;

          max-width: max( 40em, 40vw );
          max-height: $max-line * $line-height;

          padding-top: 1em;
          margin-top: 1em;
          margin-bottom: 1em;

          text-align: justify;
          line-height: $line-height;
          text-overflow: ellipsis;
          overflow: hidden;

        }

        .picture {

          margin-bottom: 1em;
          text-align: center;

          &__image {

            width: 30vw

          }

        }

        @media ( min-width: 1000px ) {

          flex-direction: row-reverse;
          justify-content: space-around;

        }

    }

}
</style>
