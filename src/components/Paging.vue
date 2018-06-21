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
          @click="handleClick(-1)"
        >
          <i class="el-icon-arrow-left"></i>
        </div>
        <p>

        </p>
        <p
          :class="['fenye-button',{active:currentPage===k},{dot:k==='...'}]"
          v-for="(k,i) in pages"
          :key="i"
          @click="handleClick(0,k)"
        >
          {{k}}
        </p>
        <div
          class="fenye-right fenye-button"
          @click="handleClick(1)"
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
 * FIXME:
 *  1. 对应的计算属性返回的数组有没有更简单的实现方法，或者实现一个可配置的展示页数
 *  2. 传入对应的参数： 1. total,currentPage,pages
 */
export default {
  name: "HelloWorld",
  // 如果要进行数据类型的配置，传入的是一个对象
  props: {
    total: {
      type: Number,
      default: 10
    },
    pageSize: {
      type: Number,
      default: 5
    },
    currentPage: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {};
  },
  methods: {
    /**
     * 点击事件的处理：
     *  @param {Number} type :  1:下一页，-1：前一页，0：跳转到点击的页数
     *  @param {Number || String} val: 当前页码对应的内容（可能是数字或...）
     */
    handleClick(type, val) {
      switch (type) {
        case 1:
          const nextPage = this.currentPage + 1;
          if (nextPage > this.count) return alert("已经是最后一页了");
          this.$emit("change", nextPage);
          break;
        case -1:
          const prevPage = this.currentPage - 1;
          if (prevPage < 1) return alert("已经是第一页了");
          this.$emit("change", prevPage);
          break;
        case 0:
          if (val === "...") return;
          this.$emit("change", val);
          break;
        default:
          break;
      }
    }
  },
  computed: {
    count() {
      return this.total / this.pageSize;
    },
    // 显示按钮存储的一个数组
    pages() {
      const p = this.count;
      const c = this.currentPage;
      if (this.count <= 11) {
        return p;
      }
      if (c <= 5) {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, "...", 10];
      }
      if (c > p - 5) {
        return [
          1,
          "...",
          p - 8,
          p - 7,
          p - 6,
          p - 5,
          p - 4,
          p - 3,
          p - 2,
          p - 1,
          p
        ];
      }
      if (c > 5 && c <= p - 5) {
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
          p
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
