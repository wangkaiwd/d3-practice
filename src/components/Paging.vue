<template>
  <div class="fenye">
    <div
      class="current-page"
    >
      第{{currentPage}}页
    </div>
    <div class="fenye-content">
      <div class="fenye-center">
        <div
          class="fenye-left fenye-button"
          @click="prev"
        >
          <i class="el-icon-arrow-left"></i>
        </div>
        <p>

        </p>
        <p
          :class="['fenye-button',{active:currentPage===k},{dot:k==='...'}]"
          v-for="(k,i) in pages"
          :key="i"
          @click="handleClick(k)"
        >
          {{k}}
        </p>
        <div
          class="fenye-right fenye-button"
          @click="next"
        >
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
 *  3. 当前页码在前5个和后5个之间，第二个页码和倒数第二个页码为...,首页和尾页保留
 */
export default {
  name: "HelloWorld",
  data() {
    return {
      total: 10,
      currentPage: 1
    };
  },
  methods: {
    // 点击按钮
    handleClick(val) {
      if (val === "...") return;
      this.currentPage = val;
    },
    // 前一个
    prev() {
      if (this.currentPage <= 1) return alert("已经是第一页了!!");
      this.currentPage--;
    },
    // 后一个
    next() {
      if (this.currentPage >= this.total) return alert("已经是最后一页了!!");
      this.currentPage++;
    }
  },
  computed: {
    // 显示按钮存储的一个数组
    pages() {
      const t = this.total;
      const c = this.currentPage;
      if (t <= 11) {
        return t;
      }
      if (c <= 5) {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, "...", 10];
      }
      if (c > t - 5) {
        return [
          1,
          "...",
          t - 8,
          t - 7,
          t - 6,
          t - 5,
          t - 4,
          t - 3,
          t - 2,
          t - 1,
          t
        ];
      }
      if (c > 5 && c <= t - 5) {
        return [
          1,
          "...",
          c - 3,
          c - 2,
          c - 1,
          c,
          c + 1,
          c + 2,
          c + 3,
          "...",
          t
        ];
      }
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
  .dot {
    border: 0;
    width: 14px;
    cursor: default;
  }
}
</style>
