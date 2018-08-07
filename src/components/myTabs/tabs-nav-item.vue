<template>
  <div class="tabs-nav-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabsNavItem"
};
</script>

<style lang="less" scoped>
.tabs-nav-item {
  padding: 6px 10px;
  border: 1px solid red;
}
</style>
