<template>
  <div>
    <el-button @click="click1">prompt1</el-button>
    <el-button @click="click2">prompt2</el-button>
  </div>
</template>

<script>
export default {
    methods: {
        click1() {
            this.$prompt('输入Wide备注', '输入', {
                customClass: "inputDialogStyle inputDialogStyleeWide",          
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                inputValue: '1234'})
                .then(({value}) => 
                  {
                      this.$message({showClose: true, type: "success", message: value, duration: 1000});
                  }
                );
        },
        click2() {
            this.$prompt('设置Short备注', '输入', {
                customClass: "inputDialogStyle",
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                inputPattern: /^[0-9]*$/,
                inputValue: '111',
                inputErrorMessage: '请输入数字'
                }).then(({value}) => 
                    {
                        this.$message({showClose: true, type: "success", message: value, duration: 1000});
                    }
                );
        }
    }
}
</script>

<style lang="scss">
.inputDialogStyle {
  .el-message-box__header {
    background-color: #87cefa;
    .el-message-box__title {
      font-size: 24px !important;
      color: #fff;
    }
  }
  .el-message-box__message {
    padding-left: 0px !important;
    font-size: 24px !important;
  }
}

.el-message-box {
    width: auto;
}

.inputDialogStyleeWide {
  .el-input__inner {
      width: 400px !important;
  }
}
</style>