<i18n lang='yaml'>
    ar :
        copy_right : جميع حقوق الطبع و النشر محفوظة لبرلمان طلائع القاهرة
</i18n>
<template lang="pug">
    .footer
        v-logo.footer__logo
        .footer__copyRight {{ $t('copy_right')}}
        .contactUs
            a.contactUs__facebook( :href='contacts.facebook' ): FacebookIcon
            a.contactUs__whatsapp( :href='contacts.whatsapp' ): WhatsappIcon
            a.contactUs__email( :href='contacts.email' ): EmailIcon
</template>
<script>
import FacebookIcon from '@/assets/icons/facebook.svg?inline'
import WhatsappIcon from '@/assets/icons/whatsapp.svg?inline'
import EmailIcon from '@/assets/icons/email.svg?inline'

export default {
  components: { FacebookIcon, WhatsappIcon, EmailIcon },
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
    height: 10vh;

    display: flex;
    justify-content: space-between;
    align-items: center;

    box-sizing: border-box;
    padding: 1em;

    background-color: rgb(var(--black));

    &__copyRight {

        color: rgb( var(--white) );
        font-size: 0.8em;

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

            background: rgb( var(--gray-500) );
            cursor: pointer;

            svg {
                width: 1.5em;
                fill: rgb( var(--white) );
            }

        }

    }

}
</style>
