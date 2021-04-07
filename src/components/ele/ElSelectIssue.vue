<template>
  <div>
    <el-select v-model="objectValue">
      <el-option
        v-for="item in items"
        :key="item.id"
        :label="item.id"
        :value="item"
      ></el-option>
    </el-select>

    <multiselect style="width:200px" :searchable="false" :allow-empty="true" selectLabel="" deselectLabel="" selectedLabel=""
      v-model="objectValue" track-by="id" label="id" :options="items"> </multiselect>
  </div>
</template>

<script>
/**
 * 多项选择组件，可以选择对象
 */
export default {
  data() {
    return {
      objectValue: {
        id: "a",
        attr1: 0,
        attr2: 1,
      },
      items: [
        {
          id: "a",
          attr1: 0,
          attr2: 1,
        },
        {
          id: "b",
          attr1: 1,
          attr2: 2,
        },
      ],
    };
  },
};
</script>

<style>
</style>