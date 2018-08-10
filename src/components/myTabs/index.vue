<template>
  <div class="my-tabs">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MyTabs",
  props: {
    selected: {
      type: String,
      required: true
    }
  },
  // 必须要在mounted中执行，保证子组件全部加载完毕
  mounted() {
    this.$children[0].$children.forEach(vm => {
      vm.selected = this.selected;
    });
  }
};
</script>

<style lang="less" scoped>
.my-tabs {
}
</style>
