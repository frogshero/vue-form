<template>
<div>
    <!-- 必须加：:value="value" 否则修改绑定的值不会回显 -->
    <input @input="handleInput" @change="handleChange" @blur="handleBlur" :value="value" ref="input"/>
</div>
</template>

<script>
  import emitter from 'element-ui/src/mixins/emitter';

export default {
    name: 'my-input',
    // 自定义组件验证，emitter里定义了2个methods：dispatch和broadcast，这样在组件里可以调用this.dispatch
    mixins: [emitter],
    props: {
        value: [String, Number],
    },
    watch: {
        value: function() {
            console.log('myInput: ' + this.value);
        }
    },
    methods: {
        handleInput(evt) {
            //输入字符触发
            console.log('input' + evt.target.value);
            this.$emit('input', evt.target.value);
        },
        handleChange(evt) {
            //焦点移开之后触发
            console.log('change' + evt.target.value);
        },
        handleBlur(event) {
            this.$emit('blur', event);
            //自定义组件要求el-form-item验证
            this.dispatch('ElFormItem', 'el.form.blur', [this.value]);
      },
    },
    // mounted() {
    //     //初始化还需要这样：
    //     this.$refs.input.value = this.value;
    // }
}
</script>