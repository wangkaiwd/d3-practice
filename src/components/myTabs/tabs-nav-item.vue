<template>
  <div class="tabs-nav-item" :class="{active}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabsNavItem",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      active: false
    };
  },
  watch: {},
  mounted() {
    // this.active = this.name === this.selected;
  }
};
</script>

<style lang="less" scoped>
.tabs-nav-item {
  padding: 6px 10px;
  &.active {
    background-color: red;
  }
}
</style>
