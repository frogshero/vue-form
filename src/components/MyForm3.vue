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
      <!-- .number也不好使 -->
<el-radio-group v-model="addForm.radio" @change="onChange">
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
    <my-el-radio label="3">备选项3</my-el-radio>
    <my-el-radio label="6">备选项6</my-el-radio>
    <my-el-radio label="9">备选项9</my-el-radio>
  </el-radio-group>
  </div>
 
 <button @click="addForm.radio = 9"> change num </button>
 <button @click="addForm.radio = '3'"> change str </button> 
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
        // this.addForm.radio = '9';
      },
      onChange(v) {
        console.log(v);
      },
      showValue() {
        this.$message(JSON.stringify(this.addForm1));
      }
    },
    beforeCreate() {
        console.log(this.$options.propsData);
        //this.$props还是undefine
        console.log(this.$props);
    },
    created() {
        console.log(this.$options.propsData);
        console.log(this.$props);

        this.addForm=this.addForm1;
    }

}
</script>