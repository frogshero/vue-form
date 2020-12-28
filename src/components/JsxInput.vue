<script>
const NAME = 'xxxx';
export default {
    name: NAME,
    functional: true,
    props: {
        ppt: {
            type: String,
            default: ''
        }
    },
    render(h, ctx) {
        return <el-input {...ctx.data}></el-input>
    }
}
</script>