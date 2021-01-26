<template>
    <div class="tools-bar">
      <div class="tools-item">
        <el-select size="mini" v-model="value">
          <el-option label="aaaa1"  :value="1" :key="1" ></el-option>
          <el-option label="aaaa2"  :value="2" :key="2" ></el-option>
          <el-option label="aaaa3"  :value="3" :key="3" ></el-option>                    
        </el-select>
      </div>
      <div class="tools-item">
      <el-button size="small" icon="el-icon-search">导出</el-button>
      </div>
      <div class="tools-item">
      <el-button size="small" icon="el-icon-refresh">审核</el-button>
      </div>
      <div class="tools-item">
      <el-button size="small" icon="el-icon-refresh">反审核</el-button>
      </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>