<template>
<div class="board-column">
    <div class="board-column-header" @click="$emit('header-click')">{{title}}</div>
    <div :id="listId" :groupId="groupId" class="board-column-content">
      <div v-for="item in value" :key="item" :data-id="item" class="board-item">{{item}}</div>
    </div>
</div>
</template>

<script>
//let Sortable = require('@/common/Sortable.js')
import Sortable from 'sortablejs'


export default {
    name: 'drag-list',
    data() {
        return {
            SJ: {}
        }
    },
    props: {
        title: {
            //分组title
            type: String,
            required: true
        },
        listId: {
            //dom的id
            type: String,
            required: true
        },
        groupId: {
            //分组id
            type: String,
            required: true
        },
        value: {
            type: Array,
            required: true
        },
    },
    methods: {
        addItem(evt) {
            // evt.items.forEach((e,idx) => {
            //     this.list.splice(evt.newIndex + idx, 0, e.id);
            // });
        },
        removeItem(evt) {
            // evt.items.forEach(e => {
            //     this.list.splice(this.list.indexOf(e.id), 1);
            // }); 
        },
        onSort(evt) {
            this.$emit('input', this.SJ.toArray());
            console.log(this.value);
            // this.value[oldIndex].
            // evt.oldIndex
            // evt.newIndex
        }
    },
    mounted() {
        this.SJ = new Sortable(document.getElementById(this.listId), {
            multiDrag: true,
            selectedClass: 'selected',
            fallbackTolerance: 3,
            group: this.groupId,
            animation: 50,
            onAdd: this.addItem,
            onRemove: this.removeItem,
            onSort:  this.onSort,
        });
    }
}
</script>

<style lang="scss" scoped>
.list-group-item:hover {
	z-index: 0;
}

.col {
    padding-right: 0;
    margin-top: 3px;
    margin-right: 15px;
    max-width: 100;
}

.selected {
	background-color: #f9c7c8;
	border: solid red 1px !important;
	z-index: 1 !important;
}

// .board-column {
//   min-width: 300px;
//   min-height: 100px;
//   height: auto;
//   overflow: hidden;
//   background: #f0f0f0;
//   border-radius: 3px;

  .board-column-header {
    margin-top: 20px;
    height: 30px;
    line-height: 30px;
    overflow: hidden;
    padding: 0 20px;
    text-align: center;
    background: green;
    color: #fff;
    border-radius: 3px 3px 0 0;
  }

//   .board-column-content {
//     height: auto;
//     overflow: hidden;
//     border: 10px solid transparent;
//     min-height: 60px;
//     display: flex;
//     justify-content: flex-start;
//     flex-direction: column;
//     align-items: center;

    .board-item {
      cursor: pointer;
      width: 100%;
      height: 30px;
      line-height: 30px;
      margin: 2px 0;
      background-color: #fff;
      text-align: left;
      padding: 2px 5px;
      box-sizing: border-box;
      box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.2);
    }
//   }
// }
</style>