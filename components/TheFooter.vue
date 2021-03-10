<i18n lang='yaml'>
    ar :
        copy_right : جميع حقوق الطبع و النشر محفوظة لبرلمان طلائع القاهرة
</i18n>
<template lang="pug">
    .footer
        v-logo.footer__logo
        .footer__copyRight {{ $t('copy_right')}}
        .contactUs
            .contactUs__facebook: FacebookIcon
            .contactUs__whatsapp: WhatsappIcon
            .contactUs__email: EmailIcon
</template>
<script>
import FacebookIcon from '@/assets/icons/facebook.svg?inline'
import WhatsappIcon from '@/assets/icons/whatsapp.svg?inline'
import EmailIcon from '@/assets/icons/email.svg?inline'

export default {
  components: { FacebookIcon, WhatsappIcon, EmailIcon }
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

    background-color: rgb(var(--blue-200));

    &__copyRight {

        color: rgb( var(--white) );
        font-size: 0.8em;

    }

    .contactUs {

        & > * {

            width : 2em;
            fill: rgb( var(--white) );
            float: left;

        }

    }

}
</style>
