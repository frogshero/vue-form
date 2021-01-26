<template>
  <div>
    <el-row class="tac">
      <el-col :span="8">
        <el-menu
          :default-active="mm"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
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
        <MyDialog v-if="showDialog" @close-dialog="showDialog=false"/>
        <my-component />

        <el-button @click="showDialog=true">打开对话框</el-button>

        <jsx-input v-model="txt" @input="onInput" />
        <create-btn type="danger" @click="changeMenu2" />
        <el-button @click="changeMenu">xxx</el-button>

        <create-element title="99999" label="88888" value="7777" />
        <func-component text="aaaaaa" />
        <render-comp />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MyForm3 from "../components/comp/MyForm3.vue";
import MyDialog from "../components/comp/MyDialog";
import CreateBtn from "../components/comp/CreateBtn.vue";
import JsxInput from "../components/comp/JsxInput.vue";
import CreateElement from "../components/comp/CreateElement.vue";
import FuncComponent from "../components/comp/FuncComponent.vue";
import RenderComp from "../components/comp/RenderComp.vue";
import MyComponent from '../components/comp/MyComponent.vue';
export default {
  name: "Test",
  provide: {
    //模板不需要配置
    defVal: "vv",
  },
  components: {
    MyDialog,
    CreateBtn,
    JsxInput,
    CreateElement,
    FuncComponent,
    RenderComp,
    MyComponent,
  },
  data() {
    return {
      showDialog: false,
      txt: "",
      mm: "1-4-1",
    };
  },
  methods: {
    //input -> change -> handleChange
    changeMenu() {
      //:default-active= ??
      this.mm = "1-1";
    },
    changeMenu2() {
      this.mm = "1-2";
    },
    onInput(val) {
      this.txt = val;
    },
    onChange2(v) {
      console.log(v);
    },
    onChange(a, b, c) {
      console.log("change");
      console.log(a);
      console.log(b);
      console.log(c);
    },
    onHandleChange(a, b, c) {
      console.log("handle");
      console.log(a);
      console.log(b);
      console.log(c);
    },
    onInput(a, b, c) {
      console.log("input");
      console.log(a);
      console.log(b);
      console.log(c);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

