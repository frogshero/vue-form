<script>
import MyRadio from './MyRadio.vue'
import JsxInput from './JsxInput.vue'

export default {
    name: 'create-ele',
    functional: true,
    components: {
        MyRadio
    },
    props: {
        title: {
            Type: String,
            default: 'xx'
        }
    },
    render(h, ctx) {
        // return this.$createElement('label', this.title);
        // return this.$createElement('label',  {style: {color: "red"}, domProps: {innerHTML: 'baz'}});    
        // return this.$createElement('input', {attrs: {value: this.title}}); //value属性是input这个标签的属性
        // return this.$createElement('input', {attrs: {readonly: true, value: this.title}});
        // return <input {...ctx.data}></input>; //{"attrs":{"title":"99999","label":"88888","value":"7777"}}

        //return <label>{this.props.title}</label> //函数组件没有this
        return <label>{ctx.props.title}</label>
    }
}
</script>