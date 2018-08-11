<template>
  <div class="tabs-nav-item" :class="{active}" @click="changeItem">
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
  methods: {
    changeItem() {
      this.$parent.$parent.selected = this.name;
    }
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
