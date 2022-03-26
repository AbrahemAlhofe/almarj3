<template lang='pug'>
  .logo( :class='{ "--full" : isFull }' )
    Logo.logo__icon
    span.logo__span( v-if='isFull' )
      .logo__name برلمان طلائع القاهرة
      .logo__badge( v-if='badge' ) {{ badge }}
</template>
<script>
import Logo from '@/assets/images/logo.svg?inline'
export default {
  components: { Logo },
  props: {
    isFull: {
      type: Boolean,
      default: false
    },
    badge: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang='scss'>
.logo {

  width: fit-content;
  height: 2em;

  display: flex;
  align-items: center;

  &__icon {

    height: 100%;

    animation: 1s appear;
    transform: scale(1.5);

  }

  &__name {

    font-weight: bold;
    color: var(--black);
    font-size: 0.85em;

  }

  &__badge {

    background-color: var(--blue-20);
    border-radius: 0.5em;
    padding: 0.5em;
    font-size: 0.6em;
    color: var(--white);
    width: fit-content;

  }

  &.--full {

    svg { margin-inline-end: 1em }

  }

}

.layout.--dark-mode {

  .logo__badge {

    color: var(--black);

  }

}

@keyframes appear {

  0% { opacity: 0 }

}
</style>
