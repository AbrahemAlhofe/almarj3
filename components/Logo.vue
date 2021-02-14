<i18n lang='yaml'>
  ar:
    logo__name: "برلمان طلائع القاهرة"
</i18n>
<template lang='pug'>
  .logo( :class='{ "logo--isFull" : isFull }' )
    Logo.logo__icon
    .logo__name( v-if='isFull' ) {{ $t('logo__name') }}
</template>
<script>
import Logo from '@/assets/images/logo.svg?inline'
export default {
  components: { Logo },
  props: {
    isFull: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang='scss'>
.logo {

  width : 13em;
  height : 2em;

  display : flex;
  align-items: center;

  &__icon {
    height : 100%;
    animation: 1s appear;
    margin-inline-end : 1em;
    transform: scale(1.5);
  }

  &__name { font-weight: bold }

}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
