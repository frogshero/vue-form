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

    <div>
  <el-radio-group v-model="addForm.radio">
    <my-el-radio :label="3">备选项3</my-el-radio>
    <my-el-radio :label="6">备选项6</my-el-radio>
    <my-el-radio :label="9">备选项9</my-el-radio>
  </el-radio-group>
  </div>
 
 <button @click="clickChange"> change </button>
 <button @click="showValue"> showValue </button> 
</div>
</template>
<script>
import MyElRadio from './MyElRadio.vue'
import {Input} from 'element-ui'
export default {
    components: {
      MyElRadio
    },
    data () {
      return {  
      };
    },
    props: {
        addForm1: Object,
    },
    methods: {
      clickChange() {
        this.addForm.radio = '9';
      },
      showValue() {
        this.$message(JSON.stringify(this.addForm1));
      }
    },
    created() {
        this.addForm=this.addForm1;
    }

}
</script>