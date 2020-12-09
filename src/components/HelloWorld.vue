<template>
  <div class="hello">
    <el-form :inline="true" :model="formModel" :rules="rules" ref="formRef">
    <el-input v-model="formModel.input1" placeholder="请输入内容"></el-input>
    <el-form-item label="a form item" prop="input4">
      <el-input v-model="formModel.input4" ></el-input>
    </el-form-item>
    <!-- prop放在el-form-item上, 但是对自定义组件无效 -->
    <el-form-item label="customized" prop="input2">
    <!-- 自定义组件使用v-model 默认会利用名为 value 的 prop 和名为 input 的事件-->
      <my-input v-model="formModel.input2"/>
    </el-form-item>
    <!-- .sync 会扩展成一个更新父组件绑定值的 v-on 侦听器 -->
    <my-input-2 :aa.sync="formModel.input3"/>

    <el-form-item>
        <el-button :click="onClick" type="primary">主要按钮</el-button>
    </el-form-item>    
    </el-form>
  </div>
</template>

<script>
import MyInput from './MyInput'
import MyInput2 from './MyInput2'

export default {
  name: 'HelloWorld',
  components: { MyInput, MyInput2},
  data: function(){
    return {
      formModel: {
        input1: "",
        input2: "xxx",
        input3: "11",
        input4: 12345
      },
      rules: {
          input2: [
            {required: true, message: 'required', trigger: 'blur'},
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          input4: [
            {required: true, message: 'required', trigger: 'blur'},
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]
      }
    }
  },
  props: {
    msg: String
  },
  methods: {
    onClick() {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
