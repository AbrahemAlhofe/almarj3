<template lang='pug'>
button.button( @click="togglePrefersColorMode" :class='{ "--rotate" : $store.state.prefersColorMode === "dark" }' )
    .button__side#front
        span.button__icon: SunIcon
        span.button__text الوضع النهاري
    .button__side#back
        span.button__icon: MoonIcon
        span.button__text الوضع الليلي
</template>
<script>
import SunIcon from '@/assets/icons/sun.svg?inline'
import MoonIcon from '@/assets/icons/moon.svg?inline'

export default {

  components: { SunIcon, MoonIcon },

  methods: {

    togglePrefersColorMode () {
      setTimeout(() => this.$store.commit('togglePrefersColorMode'), 500)
    }

  }

}
</script>
<style lang='scss' scope>
.button {

    width: 10em;
    min-height: 3em;
    cursor: pointer;
    background-color: var(--white);
    border: none;
    border-radius: 0.5em;
    padding: 0.5em;
    transform-style: preserve-3d;
    position: relative;
    transition: transform 0.5s ease-in-out;

    &.--rotate { transform: rotateX(-180deg) }

    @media (min-width: 768px) { order: 1 }

    &__text {

        color: var(--black);
        font-weight: bold;
        font-family: 'Cairo';

    }

    &__icon {

        height: fit-content;
        display: flex;

        svg {

            fill: var(--black);
            height: 100%;
            width: 2em;

        }
    }

    &__side {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 100%;
        &#front {
            transform: translateZ(10px);
        }
        &#back {
            position: absolute;
            transform: translateZ(-10px) rotateX(180deg);
            top: 0;
            right: 0;
        }
    }

}
</style>
