<template>
  <div>
    <el-container class="page">
      <el-header class="header">叽叽喳喳</el-header>
      <el-container>
        <el-aside width="150px" class="aside" style="width='150px'">
          <el-menu
					default-active="/student"
					class="el-menu-vertical-demo"
					background-color="#545c64"
					text-color="#fff"
					active-text-color="#ffd04b"
                    router
				>
					<el-submenu index="1">
						<template slot="title">
							<i class="el-icon-s-tools"></i>
							<span>系统设置</span>
						</template>
						<el-menu-item index="/student">学生管理</el-menu-item>
						<el-menu-item index="/course">课程管理</el-menu-item>
					</el-submenu>
				</el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
  computed: {},
  methods: {},
};
</script>
<style  scoped>
.page {
  width: 100vw;
  height: 100vh;
}
.header {
  background-color: rgb(98, 97, 190);
  text-align: center;
  line-height: 60px;
  font-size: 25px;
  color: white;
}
.aside {
  background-color:#545c64;
}
</style>
