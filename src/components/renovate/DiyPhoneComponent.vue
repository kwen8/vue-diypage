<template>
    <div class="diy-component" :class="{ selected: isSelected }" @mouseenter="onMove" @mouseleave="onMove">
        123
    </div>
</template>

<script>
export default {
  data() {
    return {
      isSelected: false
    };
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
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px dashed #00a0e9;
    cursor: move;
  }
}
</style>
