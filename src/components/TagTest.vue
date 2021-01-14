<template>
  <div>
    <el-col :span="3">
      <el-tag closable class="tag-item"> OKOK </el-tag>
    </el-col>
  </div>
</template>


<script>
export default {
  name: 'tagTest',
  mounted() {
    console.log('mounted');
  }
};
</script>

<style>
/* 不能加scoped */
.tag-item {
    width: 100%;
    text-align: left;    

}
.tag-item .el-icon-close {
        float: right;
}
</style>