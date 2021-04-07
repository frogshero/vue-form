<template>
  <div class="home">
    <HelloWorld msg="Welcome"/>
    <mix-comp />
    <el-select-issue />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/comp/HelloWorld.vue'
import MixComp from '../components/comp/MixComp.vue'
import ElSelectIssue from '../components/ele/ElSelectIssue.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    MixComp,
    ElSelectIssue
  }
}
</script>
