<template>
    <div>
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'nestView',
    data() {
        return {
            aaa: 1,
            bbb: 2,            
        }
    },
    created() {        
        console.log('nestView created');
    },
    mounted() {
        console.log('nestView mounted');
    }
}
</script>