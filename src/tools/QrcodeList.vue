<template>
  <div>
    <el-row>
      <el-col :span="6" style="min-height: 1px"></el-col>
      <el-col :span="6">
        <el-input
          v-model="qrcodeStr"
          type="textarea"
          rows="30"
          @paste.native.capture.prevent="pasteQrcode"
        ></el-input>
      </el-col>
      <el-col :span="6">
        <div>{{ currentQrcode }}</div>
        <el-image :src="url" style="width: 290px; height: 290px"></el-image>
        <el-button @click="startLoop">Start</el-button>
        <el-button @click="stopLoop">Stop</el-button>
      </el-col>
    </el-row>
    <!-- <el-row>
      <el-col :span="6" style="min-height: 1px"></el-col>
      <el-col :span="6" style="min-height: 1px"></el-col>
      <el-col :span="6"><el-button @click="startLoop">Start</el-button></el-col>
    </el-row> -->
    <!-- <el-button @click="getQrCodeImg">GET</el-button> -->
    <!-- <el-button @click="baidu">Baidu</el-button> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      captchaBase64Img: "",
      url: "/api/qrcode/create/?url=YEFA0600257201018A026",
      url2: "/api/qrcode/create/?url=YEFA0600257201018A027",
      qrcodeStr: "",
      currentQrcode: "111111111",
      intervalId: 0,
    };
  },
  methods: {
    startLoop() {
      if (!this.qrcodeStr) {
        this.$message.error("没有输入qrocde");
        return;
      }

      let arr = this.qrcodeStr.split("\n");
      let i = 0;
      let that = this;
      this.intervalId = setInterval(function () {
        if (i == arr.length) {
          clearInterval(that.intervalId);
          return;
        }
        that.currentQrcode = arr[i];
        that.url = "/api/qrcode/create/?url=" + arr[i];
        i++;
      }, 5000);
    },
    stopLoop() {
    //   let that = this;
    //   this.intervalId = setInterval(function () {
    //     that.currentQrcode = "2222222222222";
    //   }, 3000);
      if (!this.intervalId) {
        this.$message.error("没有开始");
        return;
      }
      clearInterval(this.intervalId);
    },
    pasteQrcode(e) {
      this.qrcodeStr = e.clipboardData.getData("Text");
      // this.qrcodeArr = codes.split("\n");
    },
    getQrCodeImg() {
      // axios.get('/api/qrcode/create/?url=YEFA0600257201019A008'
      //     ).then(res => {
      //     this.captchaBase64Img = res.data;
      // })
      // axios.get('/api/st/test').then((res)=>{
      //     consoleo.log(res);
      // })
    },
    baidu() {
      axios.get("/api/baidu").then((res) => {
        consoleo.log(res);
      });
    },
  },
};

// '/api/ww/st': {
//     target: 'http://localhost:9077',
//     changeOrigin: true,
//     pathRewrite: {
//         '^/api/ww/st': '/api/st'
//     }
// },
// axios.get('/api/ww/st/test').then((res)=>{
//     consoleo.log(res);
// })
</script>