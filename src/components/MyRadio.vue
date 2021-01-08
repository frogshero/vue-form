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
    },
    beforeCreate() {
        console.log('my radio before created');
    },
    created() {
        console.log('my radio created');
    },    
    mounted() {
        console.log('my radio mounted');
    },
    render() {
        return <input vModel={this.xx} vOn:change={this.onChange}/>
    }
}
</script>