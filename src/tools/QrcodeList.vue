<template>
  <div class="main">
    <div class="content">
        <el-input style="width: 200px;"
          v-model="qrcodeStr"
          type="textarea"
          rows="30"
          @paste.native.capture.prevent="pasteQrcode"
        ></el-input>

        <div style="display: inline-block; vertical-align: top">
          <div>{{ currentQrcode }}</div>
          <el-image :src="url" style="width: 290px; height: 290px"></el-image>

          <!-- 默认inline-block, 来自user agent stylesheet -->
          <div>
            <el-button type="primary" @click="startLoop">Start</el-button>
            <el-button type="primary" @click="stopLoop">Stop</el-button>

            <!-- block覆盖默认-->
            <el-button style="display:block" ref="refBtn" type="primary" @click="packing($event)">装箱</el-button>
          </div>
        </div> 
    </div>
  </div>
</template>

<style scoped>
.main {
  text-align: center;
}
.content {
  width: 800px;  
  margin: 0 auto;
}

</style>

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
    packing(evt) {
      this.$prompt('test', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'}).then(({value}) => {
              console.log(value);
      });

      console.log("click-------------");
      //强制失去焦点
      evt.target.blur();

    },
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