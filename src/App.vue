<template>
  <div id="app">
    <el-row class="tac">
       <el-col :span="8">
    <el-menu
      :default-active="mm"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
 </el-col>
  <el-col :span="8">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <my-form-3 :addForm1="addForm" 
      @change="onChange" @handleChange="onHandleChange" 
      @input="onInput" v-model="addForm.radio" />
    <fc-radio type='button' :options="radios" @change="onChange2"
      v-model="addForm.radio" text-color="#FF1493" fill='green' size='mini'
      />
    <!-- <MyDialog/> -->

    <jsx-input v-model="txt" @input="onInput"/>
    <create-btn type='danger' @click="changeMenu2"/>
    <el-button @click="changeMenu">xxx</el-button>
    <!-- <my-radio label='xxx'/> -->
    <my-radio-2 v-model="radio2"/>
    <create-element title='99999' label='88888' value='7777'/>
    <func-component text='aaaaaa'/>
    <render-comp />
  </el-col>
</el-row>       
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
import CreateElement from './components/CreateElement.vue';
import FuncComponent from './components/FuncComponent.vue';
import RenderComp from './components/RenderComp.vue';
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
    CreateElement,
    FuncComponent,
    RenderComp
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
      mm: '1-4-1',
    }
  },
  methods: {
    //input -> change -> handleChange
    changeMenu() {
      //:default-active= ??
      this.mm = '1-1';
    },
    changeMenu2() {
      this.mm = '1-2';
    },    
    onInput(val) {
      this.txt = val;
    },
    onChange2(v) {console.log(v);},
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
    },
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
        console.log(key, keyPath);
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
