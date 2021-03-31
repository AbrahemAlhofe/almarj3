<i18n lang='yaml'>
  ar:
    head:
      title: الصفحة الرئيسية
      description: يقدم لكم برلمان طلائع القاهرةهذا المرجع الذي من شأنه المساعدة في فهم ومعرفة المعلومات السياسية حيث ستجدون في هذا المرجع الإلكتروني فصولا تنقل لكم تعريفات مختلفة
</i18n>
<template lang='pug'>
  .defaultLayer__indexPage
    ClientOnly: TheSlider
</template>
<script>
export default {
  head () {
    return {
      title: this.$t('head.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('head.description')
        }
      ]
    }
  }
}
</script>
<style>
</style>
