<template>
    <div class="phone">
        <diy-phone-component v-for="(sData, index) in data.data" :data="sData" :key="index"/>
    </div>
</template>

<script>
import DiyPhoneComponent from '@/components/renovate/DiyPhoneComponent'
export default {
  components: {
    DiyPhoneComponent
  },
  props: {
    data: Object
  }
}
</script>

<style scoped>

</style>
