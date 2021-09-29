<template lang='pug'>
  .layout#default( :class="{ '--dark-mode' : $store.state.prefersColorMode === 'dark' }" )
    ClientOnly: TheSidebar
    ClientOnly: TheSearchWindow
    TheMenu
    Nuxt
    TheFooter
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

.layout#default {
    
  font-family: cairo;
  font-size: clamp( 16px, 1em, 1.6vw );
  word-spacing: 1px;
  background-color: var(--white);

  &.--dark-mode {

    --white: hsl( 0, 0%, 10% );
    --black: hsl( 0, 0%, 90% );

    --gray-100: hsl( 0, 0%, 15%);
    --gray-300: hsl(0, 0%, 45%);
    --gray-400: hsl( 0, 0%, 35%);
    --gray-500: hsl(0, 0%, 75%);

  }

}
</style>
