<template>
  <div>
    <h1>操作</h1>
    <el-form ref="form"  label-width="80px" >
      <el-form-item label="姓名">
        <el-input v-model="info.name"></el-input>
      </el-form-item>
      <el-form-item label="选择科目">
        <el-select v-model="info.course" placeholder="请选择科目" >
          <el-option label="web前端" value="web前端"></el-option>
          <el-option label="ui" value="ui"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
        info:{
            name:'',
            course:['web前端']
        }
    };
  },
  components: {},
  created() {},
  mounted() {},
  computed: {},
  methods: {},
};
</script>
<style  scoped>
</style>
