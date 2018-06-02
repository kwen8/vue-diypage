<template>
    <div class="phone">
        <diy-phone-component />
    </div>
</template>

<script>
import DiyPhoneComponent from "@/components/renovate/DiyPhoneComponent";
export default {
  components: {
    DiyPhoneComponent
  },
  props: {
    data: Array
  }
};
</script>

<style scoped>

</style>
