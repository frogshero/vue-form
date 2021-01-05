<script>
// import { ElButton } from 'element-ui'
const NAME = 'YYY';
export default {
    name: NAME,
    functional: true,
    props: {
        type: {
            required: false,
            type: String,
            default: ''
        },

    },
    render(h, ctx) {
        return <el-button type={ctx.props.type}>fffff</el-button>
    },
}
</script>