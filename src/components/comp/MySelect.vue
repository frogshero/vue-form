<template>
  <el-select ref="sel" @input="handleInput" :value="value" v-bind="$attrs" v-on="$listeners">
      <el-option v-for="item in list" :label="item.label" :key="item.val" :value="item.val" />
  </el-select>

  <!-- <my-select value="123"/> 123自动传到input -->
  <!-- <input />  -->
</template>

<script>
/**
 * 包装一个组件
 * 一个组件上的 v-model 默认会利用名为 value 的 prop 和名为 input 的事件
 */
export default {
    data() {
        return {
            val: null,
            list: [{label: 'o', val: 0}, {label: 'a', val: 1}, {label: 'b', val: 2}, {label: 'c', val: 3}]
        }
    },
    props: {
        value: [String, Number],
    },
    methods: {
        handleInput(newVal) {
            this.$emit('input', newVal);
        },
    },
}
</script>

<style>

</style>