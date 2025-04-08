<!--
  pageName: 主页
  describe: 默认router第一个，包含菜单
-->
<template>
  测试2
  <!-- <div :class="`${menuState.show ? 'fixd-menu' : 'menu-tab'} menu`" @click="changeMenuEvent">
    <span v-show="menuState.show">{{ menuState.title }}</span>
    <div v-show="!menuState.show" v-for="(item, index) in tabList.filter(i => i.show === 'Y')" :key="index" @click.stop="changeMenuListEvent(item)">{{ item.name }}</div>
  </div>
  <router-view></router-view> -->
</template>

<script setup lang="ts">
import axios from 'axios'
// reactive useRouter等均已再vite.config.js中全局导入不再赘述
// import { ref, reactive, onMounted } from 'vue'
// 创建route
const route = useRouter()
// 菜单
const menuState = reactive({
  show: true,
  title: '',
})
const tabList = reactive([
  {
    name: 'three',
    path: 'three-model',
    show: 'Y'
  },
  {
    name: 'main',
    path: 'index-main',
    show: 'Y'
  }
])

onMounted(() => {
  axios.get('/api/getMenuList').then((res: any) => {
    console.log(res)
  })
  menuState.title = tabList[0].name
})

// 菜单 显/隐
function changeMenuEvent() {
  menuState.show = !menuState.show
}
// 菜单选择
function changeMenuListEvent(item: any) {
  menuState.show = !menuState.show
  menuState.title = item.name
  route.push({name: item.path})
}

</script>

<style scope lang="scss">
.menu{
  background: #fff;
  z-index: 100;
}
.fixd-menu{
  color: $themeColor;
  @extend .dcc;
  width: 60px;
  height: 60px;
  position: fixed;
  top: 80%;
  right: 20px;
  border-radius: 25px;
  cursor: pointer;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, .12);
  transition: 0.3s;
  overflow: hidden;
  &:hover{
    box-shadow: 0px 12px 32px 4px rgba(0, 0, 0, .04), 0px 8px 20px rgba(0, 0, 0, .08);
  }
}
.menu-tab{
  position: fixed;
  top: 20%;
  right: calc((100% - 200px) / 2);
  width: 200px;
  height: 280px;
  border-radius: 4px;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  overflow: auto;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, .12);
  div{
    @extend .dcc;
    width: 100%;
    line-height: 44px;
    transition: .2s;
    cursor: pointer;
    &:hover{
      transition: .2s;
      background: rgba(0, 0, 0, .04);
    }
  }
}
</style>