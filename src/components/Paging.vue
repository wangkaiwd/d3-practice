<template>
  <div class="fenye">
    <div class="current-page">
      第{{currentPage}}页
    </div>
    <div class="fenye-content">
      <div class="fenye-center">
        <div class="fenye-left fenye-button">
          <i class="el-icon-arrow-left"></i>
        </div>
        <p>

        </p>
        <p 
          :class="['fenye-button',{active:currentPage===k}]"
          v-for="(k,i) in total"
          :key="i"
          @click="handleClick(k)"
        >
          {{k}}
        </p>
        <div class="fenye-right fenye-button">
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * 需求分析：
 *  1. 当前页码<=5时，倒数第二个页码为...，首页和尾页保留
 *  2. 当前页码是最后5个时，第二个页码为...,首页和尾页保留
 */
export default {
  name: "HelloWorld",
  data() {
    return {
      total: 11,
      currentPage: 1
    };
  },
  methods: {
    handleClick(index) {
      this.currentPage = index;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.fenye {
  height: 200px;
  width: 400px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .current-page {
    text-align: center;
  }
  .fenye-content {
    display: flex;
    justify-content: center;
  }
  .fenye-center {
    display: flex;
    margin-left: -4px;
  }
  .fenye-button {
    cursor: pointer;
    height: 30px;
    width: 30px;
    font-size: 14px;
    line-height: 30px;
    margin-left: 4px;
    text-align: center;
    background-color: #fff;
    color: #666;
    border-radius: 6px;
    border: 1px solid #ccc;
  }
  .active {
    background-color: #007fff;
    color: #fff;
  }
}
</style>
