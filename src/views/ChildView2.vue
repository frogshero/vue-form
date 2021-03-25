<template>
    <div>
        -------- child 2 --------
    </div>
</template>

<script>
export default {
    name: 'child2',
    created() {        
        console.log(this.$vnode.fnContext.cc);
        console.log(this.$parent.$data.cc);        
    },
    mounted() {
        console.log(this.$vnode.fnContext.cc);
    }
}
</script>