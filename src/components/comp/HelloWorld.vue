<template>
  <div style="width:1500px">
    <el-form :inline="true" :model="formModel" :rules="rules" ref="formRef">      
    <el-input v-model="formModel.input1" placeholder="请输入内容"></el-input>
    <el-form-item label="My Select:" prop="mySelect">
      <my-select v-model="formModel.mySelVal" @change="mySelectChange" size="small" clearable type="number" value=1 maxlength="3"/>
      <el-button @click="changeMySel">change my input</el-button>      
    </el-form-item>    
    <el-form-item label="a form item" prop="input4">
      <el-input v-model="formModel.input4" ></el-input>
    </el-form-item>
    <!-- prop放在el-form-item上, 但是对自定义组件无效 -->
    <el-form-item label="My Input" prop="myInput">
    <!-- 自定义组件使用v-model 默认会利用名为 value 的 prop 和名为 input 的事件-->
      <my-input v-model="formModel.myInput"/>
      <el-button @click="changeMyInput">change my input</el-button>
    </el-form-item>
    <!-- .sync 会扩展成一个更新父组件绑定值的 v-on 侦听器 -->
    <el-form-item label="input3">    
      <my-input-2 :aa.sync="formModel.input3"/>
    </el-form-item>  

    <el-form-item>
        <el-button @click="formRefClick" type="primary">主要按钮</el-button>
    </el-form-item>    
    </el-form>

    <el-form class="test2">
      <el-row :gutter=20> 
      <el-col :span=4><el-form-item label="LabelWidthNoSet"><el-input /></el-form-item></el-col>
      <el-col :span=4><el-form-item label="LabelWidthNoSet"><el-input /></el-form-item></el-col>
      <el-col :span=4><el-form-item label="a form item"><el-input /></el-form-item></el-col>
      <el-col :span="5"><el-button type="primary">主要按钮</el-button>
                       <el-button type="primary">主要按钮2</el-button></el-col>
      </el-row>      
    </el-form>

    <el-form label-width="80px">
      <el-row :gutter=8>
        <el-col :span=4 class="blankCol"></el-col>
      <el-col :span=3><div>设置了width，就得增加span, 空列不显示处理</div></el-col>     
      <el-col :span=4><el-form-item label="阿斯蒂芬"><el-input /></el-form-item></el-col>
      <el-col :span=4><el-form-item label="阿斯蒂芬"><el-input /></el-form-item></el-col>
      <el-col :span=4><el-form-item label="手动阀"><el-input /></el-form-item></el-col>
      <el-col :span=5><el-button type="primary">主要按钮</el-button>
                       <el-button type="primary">主要按钮2</el-button></el-col>
      </el-row>      
    </el-form>

    <el-form label-width="80px">
      <el-row :gutter=20>
      <el-col :span=2><div>display:flex所有el-form-item在一行，Row 组件 提供 :gutter 属性来指定每一栏之间的间隔，默认间隔为 0。</div></el-col>     
      <el-col :span=3><el-form-item label="阿斯蒂芬"><el-input /></el-form-item></el-col>
      <el-col :span=3><el-form-item label="阿斯蒂芬"><el-input /></el-form-item></el-col>
      <el-col :span=3><el-form-item label="手动阀"><el-input /></el-form-item></el-col>
      <el-col :span=4><el-button type="primary">主要按钮</el-button>
                       <el-button type="primary">主要按钮2</el-button></el-col>
      </el-row>      
    </el-form>

<!-- 不能设置 display: flex -->
<el-form ref="form" :model="form" label-width="80px" style="width:800px">
  <el-form-item label="活动名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="活动区域">
    <el-col :span=4>
    <el-select v-model="form.region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
    </el-col>
  </el-form-item>
  <el-form-item label="FloatLeft" style="float: left">
    <el-select v-model="form.region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="活动时间">
    <el-col :span=5>
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span=1>-</el-col>
    <el-col :span=4>
      <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="即时配送">
    <el-switch v-model="form.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="活动性质">
    <el-checkbox-group v-model="form.type">
      <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
      <el-checkbox label="地推活动" name="type"></el-checkbox>
      <el-checkbox label="线下主题活动" name="type"></el-checkbox>
      <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="特殊资源">
    <el-radio-group v-model="form.resource">
      <el-radio label="线上品牌商赞助"></el-radio>
      <el-radio label="线下场地免费"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="活动形式">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
import MyInput from './MyInput.vue'
import MyInput2 from './MyInput2.vue'
import CODE from '../../common/code.js'
import MySelect from './MySelect.vue'

export default {
  name: 'HelloWorld',
  components: { MyInput, MyInput2, MySelect},
  data() {
    return {
      formModel: {
        mySelVal: 0,
        input1: "",
        myInput: "xxx",
        input3: "11",
        input4: 12345
      },
      form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },      
      rules: {
          input2: [
            {required: true, message: 'required', trigger: 'blur'},
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          input4: [
            {required: true, message: 'required', trigger: 'blur'},
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          mySelect: [
            {required: true, message: 'required', trigger: 'blur'},     
          ]
      }
    }
  },
  props: {
    msg: String
  },
  methods: {
    formRefClick() {
      this.$refs.formRef.validate((valid) => {
        console.log(valid);
      })
    },
    onClick() {
      console.log(CODE.globalEnum.OK);  //这个值在console是不能inspect的
    },
    changeMySel() {
      this.formModel.mySelVal = 3;
    },
    mySelectChange(newVal) {
      console.log("mySelectChange: " + newVal);
    },
    changeMyInput() {
      this.formModel.myInput = '12';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .blankCol {
    min-height: 1px;
  }
  .test2 {
    /* position 没有用 */
    position: relative;     
    display: flex;
  }
  .test3 {
    display: flex;

  }
</style>
