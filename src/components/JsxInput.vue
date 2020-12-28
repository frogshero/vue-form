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
    render(h, ctx) {
        return <el-input {...ctx.data}></el-input>
    }
}
</script>