<template lang="pug">
    .footer
        .footer__logo
          Logo.footer__icon
          .footer__line
          .footer__name
            .footer__word-1 بــرلـمـان
            .footer__word-2 طلائع القاهرة
        .contactUs
            a.contactUs__facebook( :href='contacts.facebook' ): FacebookIcon
            a.contactUs__whatsapp( :href='contacts.whatsapp' ): WhatsappIcon
            a.contactUs__email( :href='contacts.email' ): EmailIcon
        TheFooterPrefersColorModeButton
</template>
<script>
import FacebookIcon from '@/assets/icons/facebook.svg?inline'
import WhatsappIcon from '@/assets/icons/whatsapp.svg?inline'
import EmailIcon from '@/assets/icons/email.svg?inline'
import Logo from '@/assets/images/logo.svg?inline'

export default {
  components: { FacebookIcon, WhatsappIcon, EmailIcon, Logo },
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
    min-height: 50vh;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;

    box-sizing: border-box;
    padding: 1em;

    background-color: var(--black);

    perspective: 1000vw;

    &__logo {

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      transform: scale(0.8);

      @media (min-width: 425px) { transform: scale(0.9); }

      @media (min-width: 768px) { transform: scale(1); }

    }

    &__word-1 {

      font-size: 50px;

    }

    &__word-2 {

      font-size: 31px;

    }

    &__name {

      color: black;

    }

    &__icon {

      width: 100px;

    }

    &__line {

      width: 1.5px;
      height: 125px;
      background-color: gray;

    }

    &__copyRight {

        color: var(--white);
        font-size: 0.8em;
        text-align: center;

    }

    .contactUs {

      min-width: 30%;
      display: flex;
      justify-content: space-evenly;

        & > a {

            float: left;

            width : 2.5em;
            height: 2.5em;

            border-radius: 50px;
            padding: 0.1em;
            margin: 0.4em;

            display: flex;
            justify-content: center;
            align-items: center;

            background: #fff;
            cursor: pointer;

            box-shadow: 0px 0px 25px hsl(0deg 0% 0% / 10%);

            svg {
                width: 1.5em;
                fill: var(--white);
            }

        }

    }

}
</style>
