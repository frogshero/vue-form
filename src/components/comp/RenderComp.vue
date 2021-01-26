<script>
import MyRadio from './MyRadio.vue'
export default {
    components: {
        MyRadio
    },
    //beforeCreate->created->render-> child.beforeCreate->child.created->child.render->child.mounted-> mounted
    beforeCreate() {
        console.log('renderComp before created');
    },
    created() {
        //在MyRadio created之前
        console.log('renderComp created');
    },    
    mounted() {
        //在MyRadio mounted之后
        console.log('renderComp mounted');
    },
    render() {
        return <div>
        <my-radio label='lll' value='vvv'/>
        </div>
    }
}
</script>