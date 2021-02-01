<template>
<div>
  <el-select size="small" filterable clearable v-model="value" placeholder="请选择" @change="onChange">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>

  <tag-test />

<a ref="ddd" href="http://localhost:8081/static/明细报表_1_20210128175125.xlsx" download="阿松大阿萨.xlsx">阿松大阿萨.xlsx</a>
<button @click="onClick">ffff</button>
</div>
</template>

<script>
import TagTest from '../components/comp/TagTest.vue'

export default {
  name: 'abount',
  components: { TagTest },
  data() {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }],
      value: ''
    }
  },
  methods: {
    onChange(v1, v2) {
      console.log(v1);
      console.log(v2);
    },
    onClick() {    

      // var downloadElement = document.createElement('a');
      // downloadElement.href = url;
      // downloadElement.download = fname;
      // document.body.appendChild(downloadElement);
      // downloadElement.click(); 
      // document.body.removeChild(downloadElement); 


      this.$refs.ddd.click();
    }
  },
  mounted() {
    console.log('mounted');
  }
}
</script>

<style>


</style>