<template>
<div>

<div>测试父子组件mounted顺序</div>
<my-input-2 v-if="ifShow" v-model="inputVal" father='my-component'/>

<el-button @click="ifShow = false">取 消</el-button>
<el-button type="primary" @click="ifShow = false">确 定</el-button>
</div>
</template>

<script>
import MyInput2 from './MyInput2';

export default {
    components: {
        MyInput2
    },
    provide() {
        //模板不需要配置属性,只在初始化时调用一次
       return {defVal: this.inject11};
    },
    data: function() {
        return {
            ifShow: false,
            inject11: 'god',
            inputVal: 'model_val'
        }
    },
    watch: {

    },
    methods: {
        handleClose() {
            this.dialogVisible = false;
        },
        fff() {
            this.iii.inject11 = 'ghost';
            alert(this.defVal);
        }
    },
    created() {
        console.log('my-component created');
    },       
    beforeMount() {
        console.log('my-component before mounted');
    },    
    mounted() {
        //mounted次序？？？
        this.ifShow = true;
        console.log('my-component mounted')
    }
}
</script>