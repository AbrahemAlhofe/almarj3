<template lang='pug'>
  .defaultLayout
    ClientOnly: TheSidebar
    ClientOnly: TheSearchWindow
    TheMenu.defaultLayout__menu
    Nuxt.defaultLayout__content
    TheFooter.defaultLayout__footer
</template>
<script>
export default {

  head () {
    return {

      titleTemplate: `%s | مرجع برلمان طلائع القاهرة`

    }
  }

}
</script>

<style lang='scss'>

body { margin: 0px }

.defaultLayout {
    
  font-family: cairo;
  font-size: clamp( 16px, 1em, 1.6vw );
  word-spacing: 1px;
  
  display: grid;
  grid-template-rows: 10vh minmax(90vh, auto) 1fr;

  background-color: var(--white);

  &.--dark-mode {

    --white: hsl( 0, 0%, 10% );
    --black: hsl( 0, 0%, 90% );

    --gray-100: hsl( 0, 0%, 15%);
    --gray-300: hsl(0, 0%, 45%);
    --gray-400: hsl( 0, 0%, 35%);
    --gray-500: hsl(0, 0%, 75%);

  }

  &__menu {

    grid-row: 1;

  }

  &__content {

    grid-row: 2;

  }

  &__footer {

    grid-row: 3;

  }

}
</style>
