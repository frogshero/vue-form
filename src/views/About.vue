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
    }
  },
  mounted() {
    console.log('mounted');
  }
}
</script>

<style>


</style>