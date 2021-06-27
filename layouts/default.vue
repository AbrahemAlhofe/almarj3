<i18n lang='yaml'>
  ar:
    head:
      title: مرجع برلمان طلائع القاهرة
    notify:
      there is a new content: هناك محتوي جديد
      reload: أعد التحميل
</i18n>
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

      titleTemplate: `%s | ${this.$t('head.title')}`

    }
  }

}
</script>

<style lang='scss'>
html {

  font-family: cairo;
  font-size: clamp( 16px, 1em, 1.6vw );
  word-spacing: 1px;

}

body { margin: 0px }

.defaultLayout {

  display: grid;
  grid-template-rows: 10vh minmax(90vh, auto) 1fr;

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
