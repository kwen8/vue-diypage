<template>
    <div
      class="diy-component"
      :class="{ selected: isSelected }"
      @mouseenter="onMove"
      @mouseleave="onMove"
    >
      <component :is="data.id" :params="data.params"></component>
    </div>
</template>

<script>
import { registerComponents } from '@/utils/utils';

export default {
  components: {
    ...registerComponents(['Slide'])
  },
  data() {
    return {
      isSelected: false
    };
  },
  props: {
    data: Object
  },
  methods: {
    onMove() {
      this.isSelected = !this.isSelected;
    }
  }
};
</script>

<style lang="scss" scoped>
.diy-component {
  position: relative;
  &.selected::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px dashed #00a0e9;
    cursor: move;
    z-index: 10;
  }
}
</style>
