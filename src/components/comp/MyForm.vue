<template>
  <div id="app">
    <button @click="okClick">OKKKK</button>
    <el-form :inline="true">
      <el-form-item label="审批人">
        <el-input placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>

    <el-form :inline="false">
      <el-form-item label="审批人2">
        <el-input placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="活动区域2">
        <el-select placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>

    <el-dialog widht="80%" :visible.sync="showDialog" :rules="rules">
      <el-form ref="ff" label-width="100px"  :model="formInline">
        <el-row :gutter="20">
          <!-- <el-col :span="6"> -->
            <el-form-item label="审批人3">
              <el-input
                v-model="formInline.user"
              ></el-input>
            </el-form-item>
          <!-- </el-col> -->
          <el-col :span="6">
            <el-form-item label="活动区域3">
              <el-select v-model="formInline.region" placeholder="活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>

    <button @click="showDialog=true">show</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: 1234,
        region: "",
      },
      rules: {
        user: [
          {required: true, message: '请输入', trigger: 'blur'}
        ]
      },
      showDialog: false
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
      this.$refs.ff.validate((valid, invalidFlds)=>{
        console.log(valid);
        console.log(invalidFlds);
      });
    },
    okClick() {
      console.log(this.formInline);
    }
  },
};
</script>

<style scoped>

    .dialog-form{
        padding:15px 30px;
        overflow: auto;
        max-height: 720px;
    }
</style>