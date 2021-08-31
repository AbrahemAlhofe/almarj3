<template lang='pug'>
  .defaultLayer__indexPage
    ClientOnly: TheSlider
</template>
<script>
export default {

  asyncData ({ redirect }) {

    redirect(`/docs`)

    return {}

  },

  head () {
    return {
      title: 'الصفحة الرئيسية',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'يقدم لكم برلمان طلائع القاهرةهذا المرجع الذي من شأنه المساعدة في فهم ومعرفة المعلومات السياسية حيث ستجدون في هذا المرجع الإلكتروني فصولا تنقل لكم تعريفات مختلفة'
        }
      ]
    }
  }
}
</script>
<style>
</style>
