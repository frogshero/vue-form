<template>
    <button @click="onClick">-------------</button>
</template>

<script>
import MixedCompVue from './MixedComp.js'

export default {
   mixins: [MixedCompVue],
   data: function() {
       return {
            sss: 'xxxxxxx'
       }
   },
   methods: {
       onClick() {
           this.hello();
           this.change();
           this.dd();
       },
       change() {
           //覆盖掉MixedCompVue里的同名方法
           console.log('--change？？？' + this.xxx);
       }
   }   
}
</script>

