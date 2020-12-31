<template>
    <input v-model="xx" @change="onChange"/>
</template>

<script>
export default {
    data() {
        return {
            aa: 'xxxxxxxxx'
        }
    },
    props: {
        label: {
            type: String,
            default: ''
        },
        value: {},
    },
    methods: {
        onChange(v) {
            console.log(v);
        }
    },
    computed: {
        //绑定计算属性
        xx: {
            get() {
                return this.aa;
            },
            set(val) {
                //可以在这里转换值
                this.aa = val;
            }
        }
    }
}
</script>