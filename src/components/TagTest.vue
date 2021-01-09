<template>
  <div>
    <el-col :span="3">
      <el-tag closable class="tag-item"> OKOK </el-tag>
    </el-col>
  </div>
</template>


<script>
export default {
  // data() {
  //   return {
  //     tags: [
  //       { name: '标签一', type: '' },
  //       { name: '标签二', type: 'success' },
  //       { name: '标签三', type: 'info' },
  //       { name: '标签四', type: 'warning' },
  //       { name: '标签五', type: 'danger' }
  //     ]
  //   };
  // }
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