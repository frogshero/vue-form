<template>
<div>
    <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">

        <div>测试dialog内父子组件mounted顺序,父先子后</div>
        <my-input-2 />

        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
    </el-dialog>

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
            dialogVisible: true,
            inject11: 'god',
        }
    },
    watch: {
        dialogVisible: {
            handler() {
                this.$emit('close-dialog');
            }
        }
    },
    methods: {
        handleClose() {
        },
        fff() {
            this.iii.inject11 = 'ghost';
            alert(this.defVal);
        }
    },
    mounted() {
        //mounted次序？？？
        console.log('father mounted')
    }
}
</script>