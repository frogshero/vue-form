import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.component('el-input', {
  extends: ElementUI.Input,
  created() {
    this.$on('change', (value)=> {
      if (Object.prototype.toString.call(value) === '[object String]' && value.trim() === '') {
        this.$emit('input', '')
      }
    })
  }
})