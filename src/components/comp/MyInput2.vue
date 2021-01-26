<template>
<div>
    <div>sync</div>
    <input :value="aa" @input="onInput"/>
    <div>使用provide，inject</div>
    <input :value="val" />
    <div>使用v-model</div>
    <input :value="value" />    
</div>
</template>

<script>
import util from '../../util/util.js'
export default {
    name: 'my-input-2',
    inject: {
        defVal: {
            default: '123',
        }
    },
    props: {
        aa: String,
        value: String,
        father: String,
    },
    data: function() {
        return {
            val: this.defVal
        }
    },
    methods: {
        onInput(evt) {
            //.sync必须手动发送update:xxx事件
            this.$emit('update:aa', evt.target.value);
        }
    },
    created() {
        console.log(this.father + ' child created');
    },       
    beforeMount() {
        console.log(this.father + ' child before mounted');
        this.$emit('input', this.value + 'mmm')
    },
    mounted() {
        // this.val = this.defVal;
        // util.sleep(5000);
        console.log(this.father + ' child mounted');
    }
}
</script>