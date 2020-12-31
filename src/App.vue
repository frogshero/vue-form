<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <my-form-3 :addForm1="addForm" 
      @change="onChange" @handleChange="onHandleChange" 
      @input="onInput" v-model="addForm.radio" />
    <fc-radio type='ElRadio' :options="radios" 
      v-model="addForm.radio"
      />
    <!-- <MyDialog/> -->

    <jsx-input v-model="txt" @input="onInput"/>
    <create-btn type='danger'/>
    <el-button>xxx</el-button>
    <my-radio label='xxx'/>
    <my-radio-2 v-model="radio2"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import MyForm2 from './components/MyForm2.vue'
import MyForm3 from './components/MyForm3.vue'
  import FcRadio from './components/FcRadio';  //不用组件内的name
  import MyDialog from './components/MyDialog';
  import CreateBtn from './components/CreateBtn.vue';
  import JsxInput from './components/JsxInput.vue';
  import MyRadio from './components/MyRadio.vue';
  import MyRadio2 from './components/MyRadio2.vue';
export default {
  name: 'App',
  provide: {
    //模板不需要配置
      defVal: 'vv'
  },
  components: {
    MyDialog,
    FcRadio,
    MyForm3,
    CreateBtn,
    JsxInput,
    MyRadio,
    MyRadio2,
  },
  data() {
    return {
      radio2: 0,
      addForm: {radio: 3},
      radios: [
        {value: 0, label: "不包邮", disabled: false},
        {value: 1, label: "包邮", disabled: false},
        {value: 2, label: "未知", disabled: true},
      ],
      txt: '',

    }
  },
  methods: {
    //input -> change -> handleChange
    onInput(val) {
      this.txt = val;
    },
    onChange(a, b, c) {
      console.log('change');
      console.log(a);
      console.log(b);
      console.log(c);
    },
    onHandleChange(a, b, c) {
      console.log('handle');
      console.log(a);
      console.log(b);
      console.log(c);
    },
    onInput(a, b, c) {
      console.log('input');
      console.log(a);
      console.log(b);
      console.log(c);
    }         
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
