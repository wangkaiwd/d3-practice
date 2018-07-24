<template>
  <div class="self-select">
    <div class="select-box">
      <div class="input-wrapper">
        <input type="text" placeholder="请选择菜品">
        <i class="el-icon-edit-outline select-icon"></i>
      </div>
      <div class="options-wrapper">
        <ul v-if="options.length">
          <li v-for="option in options" :key="option.id">{{option.value}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SelfSelect',
    data () {
      return {
        options: [
          {id: 1, value: '西红柿鸡蛋'},
          {id: 2, value: '青椒抱鸡蛋'},
          {id: 3, value: '回锅肉'},
          {id: 4, value: '宫保鸡丁'},
          {id: 5, value: '地三鲜'}
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
  .self-select {
    .select-box {width: 200px;margin: 100px auto;}
    .input-wrapper {display: inline-block;position: relative;width: 200px; height: 30px;
      > input {width: 100%;height: 100%;border-radius: 4px;
        outline: none;border: 1px solid #ccc;padding: 6px;
        font-size: 14px;
      }
    }
    .select-icon {position: absolute;top: 50%;right: 4px;
      transform: translateY(-50%);color: #ccc;
    }
    .options-wrapper {margin-top: 2px;padding: 8px;width: 200px;
      color: #666;line-height: 30px;box-shadow: 0 0 4px #ddd;
      li {cursor: pointer;}
    }
  }
</style>
