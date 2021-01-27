<template>
  <div class="tools-bar">
    <div class="tools-item">
      <el-select size="mini" v-model="value">
        <el-option label="aaaa1" :value="1" :key="1"></el-option>
        <el-option label="aaaa2" :value="2" :key="2"></el-option>
        <el-option label="aaaa3" :value="3" :key="3"></el-option>
      </el-select>
    </div>
    <div class="tools-item">
      <el-button size="small" icon="el-icon-search">导出</el-button>
    </div>
    <div class="tools-item">
      <el-button size="small" icon="el-icon-refresh">审核</el-button>
    </div>
    <div class="tools-item">
      <el-button size="small" icon="el-icon-refresh">反审核</el-button>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
.tools-bar {
  // position: relative;
  padding: 10px;
  background-color: #eff2fa;

  .tools-item {
    display: inline-block;
    // vertical-align: middle;
    // cursor: pointer;
    & > div {  //A>B 表示选择A元素的所有子B元素。与A B的区别在于，A B选择所有后代元素，而A>B只选择一代。
      margin-left: 10px;
      margin-right: 10px;
      background-color: red;
      // span,
      // i {
      //   display: inline-block;
      //   vertical-align: middle;
      // }
      // i {
      //   font-size: 20px;
      //   color: #aeaeae;
      // }
    }
    // .el-dropdown {
    //   font-size: 16px;
    //   color: #333333;
    // }
  }
  // .bar-line {
  //   width: 1px;
  //   height: 20px;
  //   background: #a9a9a9;
  //   margin: 0 10px;
  // }
  // & + .el-row {
  //   padding-top: 15px;
  // }
  // & + .editTableByRow {
  //   border-top: 1px solid #eaeaea;
  // }
}
</style>