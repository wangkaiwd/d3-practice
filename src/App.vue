<template>
  <div id="app">
    <el-tabs type="border-card">
      <el-tab-pane label="分页器">
        <base-paging
          :total="total"
          :pageSize="pageSize"
          :currentPage="currentPage"
          @change="change"
        >
        </base-paging>
      </el-tab-pane>
      <el-tab-pane label="倒计时">
        <base-timeout></base-timeout>
      </el-tab-pane>
      <el-tab-pane label="下拉菜单">
        <base-select></base-select>
      </el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
    <!-- <router-view/> -->
  </div>
</template>

<script>
  import BasePaging from '@/components/Paging'
  import BaseTimeout from '@/components/timeDown'
  import BaseSelect from '@/components/selfSelect'

  export default {
    // name属性：
    // 1. 允许组件模板递归的调用自身
    // 2. 便于调试，有名字的组件有更友好的警告信息
    // 3. 当在有vue-devtools,未命名组件将显示成<AnonymousComponent>,很没有语义，通过name选项，可以获得更有语义信息的组件树
    name: 'App',
    data () {
      return {
        total: 100,
        pageSize: 5,
        currentPage: 1
      }
    },
    components: {
      BasePaging,
      BaseTimeout,
      BaseSelect
    },
    methods: {
      change (val) {
        this.currentPage = val
      }
    }
  }
</script>

<style lang="less">
  #app {
    height: 100%;
    .el-tabs--border-card {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    .el-tabs--border-card > .el-tabs__content {
      flex: 1;
    }
  }
</style>
