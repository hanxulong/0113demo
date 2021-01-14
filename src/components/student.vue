<template>
  <div>
    <span>学生</span>
    <el-button type="primary" round @click="$router.push('/student/add')"
      >添加学生</el-button
    >
    <template>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
        <el-table-column fixed="right" label="操作" width="180">
          <template slot-scope="item">
            <el-button @click="handleEdit(item)" type="success" size="small"
              >编辑</el-button
            >
            <el-button
              type="danger"
              size="small"
              @click="handleDel(item.$index)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {
    handleEdit(index) {
      console.log(index);
    },
    handleDel(n) {
      this.tableData.splice(n, 1);
    },
  },
};
</script>

<style>
</style>