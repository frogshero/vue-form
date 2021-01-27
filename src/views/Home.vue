<template>
  <div class="home">
    <HelloWorld msg="Welcome"/>
    <mix-comp />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/comp/HelloWorld.vue'
import MixComp from '../components/comp/MixComp.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    MixComp
  }
}
</script>
