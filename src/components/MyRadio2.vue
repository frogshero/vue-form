<template>
<div>
    <el-radio label='GOOD' />
    <button @click="onClick">xxx</button>
</div>
</template>

<script>
export default {
    props: {
      value: {},
    },
    methods: {
        onClick() {
            this.$emit('input', '999');
        }
    }
}
</script>