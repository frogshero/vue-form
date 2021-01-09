<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :span="2">
          <DragList
            title="左列表"
            listId="leftList"
            groupId="leftGroup"
            v-model="leftArray"
            class="all-field-list"
          />
      </el-col>
      <el-col :span="2">
          <DragList
            title="右列表"
            listId="rightList"
            groupId="rightGroup"
            v-model="rightArray"
            class="done"
          />
      </el-col>
    </el-row>
    <button @click="toString">ToString</button>
  </div>
</template>

<script>
import DragList from "./DragList";
let leftObj = require("./leftObj.json");
let rightObj = require("./rightObj.json");

export default {
  name: "MappingTool",
  components: {
    DragList,
  },
  data() {
    return {
      leftArray: [1, 2, 3, 7, 8],
      rightArray: [4, 5, 6, 7, 8],
    };
  },
  computed: {
    // toDoList: function() {
    //   return this.allFields.map(e => { return {id: e, checked: false}; });
    // }
  },
  methods: {
    toString() {
      console.log(this.leftArray.toString());
      console.log(this.rightArray.toString());
    }
  },
  mounted: function () {
    let leftArr = Object.keys(leftObj);
    let rightArr = Object.keys(rightObj);
    let union = leftArr.filter(e=>rightArr.indexOf(e)>=0);
    let leftDiff = leftArr.filter(e=>rightArr.indexOf(e)<0);
    let rightDiff = rightArr.filter(e=>leftArr.indexOf(e)<0);

    union.sort();
    this.leftArray = union.concat(leftDiff);
    this.rightArray = union.concat(rightDiff);
  },
};
</script>


<style lang='scss'>
.el-row {
  margin-top: 20px;
}

.el-col {
  margin-left: 5px;
}
.board {
  width: 1000px;
  margin-left: 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: flex-start;
}
.all-field-list {
  min-height: 800px;
}
</style>