<template>
    <input :value="aa" @input="onInput"/>
</template>

<script>
export default {
    name: 'my-input-2',
    props: {
        aa: String
    },
    methods: {
        onInput(evt) {
            this.$emit('update:aa', evt.target.value);
        }
    }
}
</script>