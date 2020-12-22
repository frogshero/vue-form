<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <my-form-3 :addForm1="addForm"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyForm2 from './components/MyForm2.vue'
import MyForm3 from './components/MyForm3.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    MyForm2,
    MyForm3
  },
  data() {
    return {
      // addForm: {radio: '3'} 
      addForm: {radio: 3}
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
