<template>
<div>
<button @click="onClick">打开Dialog</button>
<button @click="onPrompt">打开Prompt</button>
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
      this.$dlgs.user('fffffff', {qq: 1234}).then(res => {
        console.log(res)        
      });
    },
    onPrompt() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        });
    }
  },
  mounted() {
    console.log('mounted');
  }
}
</script>

<style>


</style>