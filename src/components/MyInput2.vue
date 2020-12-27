<template>
<div>
    <input :value="aa" @input="onInput"/>
    <input :value="val" />
</div>
</template>

<script>
export default {
    name: 'my-input-2',
    inject: {
        defVal: {
            default: '123',
        }
    },
    props: {
        aa: String,
        
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
    mounted() {
        // this.val = this.defVal;
        // console.log(this.defVal);
    }
}
</script>