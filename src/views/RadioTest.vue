<template>
  <div>
    <my-form-3
      @change="onChange"
      @handleChange="onHandleChange"
      @input="onInput"
      v-model="rr"
    />

    <fc-radio
      type="button"
      :options="radios"
      @change="onChange"
      v-model="radio1"
      text-color="#FF1493"
      fill="green"
      size="mini"
    />
    <!-- <my-radio label='xxx'/> -->
    <my-radio-2 v-model="radio2" />
  </div>
</template>

<script>
import FcRadio from "../components/FcRadio.vue"; //不用组件内的name
import MyRadio from "../components/MyRadio.vue";
import MyRadio2 from "../components/MyRadio2.vue";
import MyForm3 from "../components/MyForm3.vue";
export default {
  components: {
    FcRadio,
    MyForm3,
    MyRadio2,
    MyForm3,
  },
  data() {
    return {
      radio1: 3,
      radio2: 3,
      rr: 3,
      radios: [
        { value: 0, label: "不包邮", disabled: false },
        { value: 1, label: "包邮", disabled: false },
        { value: 2, label: "未知", disabled: true },
      ],
    };
  },
  methods: {
    onChange(a, b, c) {
      console.log("change");
      console.log(a);
      console.log(b);
      console.log(c);
    },
    onInput(val) {
      this.txt = val;
    },
    onHandleChange(a, b, c) {
      console.log("handle");
      console.log(a);
      console.log(b);
      console.log(c);
    },
  },
};
</script>