<template>
<div>
    <div>
  <el-radio-group v-model="addForm.radio">
    <el-radio :label="'3'">备选项3</el-radio>
    <el-radio :label="'6'">备选项6</el-radio>
    <el-radio :label="'9'">备选项9</el-radio>
  </el-radio-group>
  </div>
    <div>
<el-radio-group v-model="addForm.radio">
    <el-radio label="3">备选项3</el-radio>
    <el-radio label="6">备选项6</el-radio>
    <el-radio label="9">备选项9</el-radio>
  </el-radio-group>
  </div>

    <div>
  <el-radio-group v-model="addForm.radio">
    <el-radio :label="3">备选项3</el-radio>
    <el-radio :label="6">备选项6</el-radio>
    <el-radio :label="9">备选项9</el-radio>
  </el-radio-group>
  </div>
 
</div>
</template>
<script>
export default {
    data () {
      return {  
      };
    },
    props: {
        addForm1:Object,
    },
    created() {
        this.addForm=this.addForm1;
    }

}
</script>