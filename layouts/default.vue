<template lang='pug'>
  .defaultLayout
    TheMenu.defaultLayout__menu
    TheSidebar
    TheSearchWindow
    Nuxt.defaultLayout__content
    TheFooter.defaultLayout__footer
</template>
<script>
export default {}
</script>

<style lang='scss'>
html {

  font-family: cairo;
  font-size: clamp( 0.9vw, 1em, 1.6vw );
  word-spacing: 1px;

}

.defaultLayout {

  display: grid;
  grid-template-rows: 1fr minmax(100vh, auto) 1fr;

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
