<template>
    <div class="phone">
        <diy-phone-component
          v-for="(sData, index) in data.data"
          :data="sData"
          :key="index"
          @click="setComponent(index)"
        />
    </div>
</template>

<script>
import DiyPhoneComponent from '@/components/renovate/DiyPhoneComponent';

export default {
  components: {
    DiyPhoneComponent,
  },
  props: {
    data: Object,
  },
  methods: {
    setComponent (index) {
      this.$store.dispatch('SET_SELECTED_COMPONENT_BY_INDEX', index)
    }
  }
};
</script>

<style scoped>
  .phone {
    width: 375px;
    min-height: 700px;
    border: 1px solid #ccc;
  }
</style>
