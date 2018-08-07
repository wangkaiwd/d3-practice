<template>
  <div class="tabs-nav">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabsNav"
};
</script>

<style lang="less" scoped>
.tabs-nav {
  display: flex;
}
</style>
