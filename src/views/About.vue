<template>
<div>
<button @click="onClick">打开Dialog</button>
</div>
</template>

<script>
import TagTest from '../components/comp/TagTest.vue'

export default {
  name: 'abount',
  components: { TagTest },
  data() {
    return {
    }
  },
  methods: {
    onClick() {    
      this.$dlgs.user('fffffff', {qq: 1234}, (res) => console.log(res));
    }
  },
  mounted() {
    console.log('mounted');
  }
}
</script>

<style>


</style>