<template lang="pug">
    .footer
        button.button( @click="$store.commit('togglePrefersColorMode')" )
            template( v-if='$store.state.PrefersColorMode === "dark"' )
                span.button__icon: SunIcon
                span.button__text الوضع النهاري
            template( v-if='$store.state.PrefersColorMode === "light"' )
                span.button__icon: MoonIcon
                span.button__text الوضع الليلي
        .contactUs
            a.contactUs__facebook( :href='contacts.facebook' ): FacebookIcon
            a.contactUs__whatsapp( :href='contacts.whatsapp' ): WhatsappIcon
            a.contactUs__email( :href='contacts.email' ): EmailIcon
        .footer__copyRight جميع حقوق الطبع و النشر محفوظة لبرلمان طلائع القاهرة
</template>
<script>
import FacebookIcon from '@/assets/icons/facebook.svg?inline'
import WhatsappIcon from '@/assets/icons/whatsapp.svg?inline'
import EmailIcon from '@/assets/icons/email.svg?inline'
import SunIcon from '@/assets/icons/sun.svg?inline'
import MoonIcon from '@/assets/icons/moon.svg?inline'

export default {
  components: { FacebookIcon, WhatsappIcon, EmailIcon, SunIcon, MoonIcon },
  data () {
    return {
      contacts: {
        facebook: 'https://www.facebook.com/%D8%A8%D8%B1%D9%84%D9%85%D8%A7%D9%86-%D8%B7%D9%84%D8%A7%D8%A6%D8%B9-%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9-103275544752339',
        whatsapp: 'https://wa.me/2001157510206',
        email: 'mailto:samakhaled1444@gmail.com'
      }
    }
  }
}
</script>
<style lang="scss">
.footer {

    width: 100%;
    height: 20vh;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    box-sizing: border-box;
    padding: 1em;

    background-color: var(--black);

    @media (min-width: 768px) { flex-direction: row }

    &__copyRight {

        color: var(--white);
        font-size: 0.8em;

    }

    .button {

        width: 10em;
        height: 3em;
        display: flex;
        justify-content: space-around;
        align-items: center;
        cursor: pointer;
        background-color: var(--white);
        border: none;
        border-radius: 0.5em;

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

        @media (min-width: 768px) { order: 1 }

    }

    .contactUs {

        & > a {

            float: left;

            width : 2.5em;
            height: 2.5em;

            border-radius: 5px;
            padding: 0.1em;
            margin: 0.4em;

            display: flex;
            justify-content: center;
            align-items: center;

            background: var(--gray-500);
            cursor: pointer;

            svg {
                width: 1.5em;
                fill: var(--white);
            }

        }

    }

}
</style>
