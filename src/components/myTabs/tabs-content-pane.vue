<template>
  <div class="tabs-content-pane">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabsContentPane"
};
</script>

<style lang="less" scoped>
.tabs-content-pane {
  height: 100px;
  background-color: pink;
  border: 1px solid #000;
}
</style>
