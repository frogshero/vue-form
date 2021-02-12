<template>
<div>
    <el-button @click="getQrCode">GET</el-button>
        <el-button @click="baidu">Baidu</el-button>
</div>
</template>

<script>
import axios from 'axios'

export default {
    methods: {
        getQrCode() {
            // axios.get('/api/qrcode/code?text=YEFA0600257201019A008').then((res) => {
            //     console.log(res);

            // })
            // axios.get('/api/st/test').then((res)=>{
            //     consoleo.log(res);
            // })
            axios.get('/api/mesbasic/sys/com/table/config/getTableGroupConfig?pageId=selectUserList')
        },
        baidu() {
            // axios.get('/api/baidu').then((res)=>{
            //     consoleo.log(res);
            // })
            axios.get('/api/ww/st/test').then((res)=>{
                consoleo.log(res);
            })
        }
    }
}
</script>