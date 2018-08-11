<template>
  <div class="tabs-content-pane" v-show="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabsContentPane",
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
  }
};
</script>

<style lang="less" scoped>
.tabs-content-pane {
  height: 100px;
  background-color: pink;
  border: 1px solid #000;
}
</style>
