<template>
    <div>
        <div>-------- child 1 --------</div>
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'child1',
    data() {
        return {
            cc: 11,
            dd: 22,            
        }
    },    
    created() { 
        //this.$vnode.fnContext来自Parent的data       
        console.log(this.$vnode.fnContext.aaa);
    },
    mounted() {
        console.log(this.$vnode.fnContext.bbb);
    }
}
</script>