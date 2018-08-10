<template>
  <div id="app">
    <el-tabs type="border-card">
      <el-tab-pane label="分页器">
        <!-- <base-paging
          :total="total"
          :pageSize="pageSize"
          :currentPage="currentPage"
          @change="change"
        >
        </base-paging> -->
        <my-tabs selected="woman">
          <tabs-nav>
            <tabs-nav-item name="woman">美女</tabs-nav-item>
            <tabs-nav-item name="phone">手机</tabs-nav-item>
            <tabs-nav-item name="digit">数码</tabs-nav-item>
          </tabs-nav>
          <tabs-content>
            <tabs-content-pane name="woman">美女相关咨讯</tabs-content-pane>
            <tabs-content-pane name="phone">手机相关咨讯</tabs-content-pane>
            <tabs-content-pane name="digit">数码相关咨讯</tabs-content-pane>
          </tabs-content>
        </my-tabs>
      </el-tab-pane>
      <el-tab-pane label="倒计时">
        <base-timeout></base-timeout>
        <div style="marginTop:12px;">

        </div>
        <new-set-timeout :isOpenCountDown.sync="isOpenCountDown"
                         @click="handleClick"
                         initText="点击发送发送验证码"
                         executeText="请等待20s"
                         :number="20"
                         :checkOptions="checkOptions"></new-set-timeout>
      </el-tab-pane>
      <el-tab-pane label="下拉菜单">
        <base-select></base-select>
      </el-tab-pane>
      <el-tab-pane label="父子爷的亲密接触">
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import BasePaging from "@/components/Paging";
import BaseTimeout from "@/components/timeDown";
import BaseSelect from "@/components/selfSelect";
import NewSetTimeout from "@/components/timeDown/new";

import MyTabs from "@/components/myTabs";
import TabsNav from "@/components/myTabs/tabs-nav";
import TabsNavItem from "@/components/myTabs/tabs-nav-item";
import TabsContent from "@/components/myTabs/tabs-content";
import TabsContentPane from "@/components/myTabs/tabs-content-pane";

export default {
  // name属性：
  // 1. 允许组件模板递归的调用自身
  // 2. 便于调试，有名字的组件有更友好的警告信息
  // 3. 当在有vue-devtools,未命名组件将显示成<AnonymousComponent>,很没有语义，通过name选项，可以获得更有语义信息的组件树
  name: "App",
  data() {
    return {
      total: 100,
      pageSize: 5,
      currentPage: 1,
      isOpenCountDown: false,
      checkOptions: {
        text: "email",
        number: 18404713626
      }
    };
  },
  components: {
    BasePaging,
    BaseTimeout,
    BaseSelect,
    NewSetTimeout,
    MyTabs,
    TabsNav,
    TabsNavItem,
    TabsContent,
    TabsContentPane
  },
  methods: {
    change(val) {
      this.currentPage = val;
    },
    handleClick() {
      this.isOpenCountDown = true;
    }
  }
};
</script>

<style lang="less" scoped>
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
