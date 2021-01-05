<script>
const NAME = 'xxxx';
export default {
    name: NAME,
    functional: true,
    props: {
        ppt: {
            type: String,
            default: ''
        },
        value: '',
    },
    //函数组件生命周期函数无效
    beforeCreate() {
        console.log(this.$options.propsData);
        console.log(this.$props);
    },
    created() {
        console.log(this.$options.propsData);
        console.log(this.$props);
    },
    render(h, ctx) {
        return <el-input {...ctx.data}></el-input>
    }
}
</script>