import axios from 'axios'

axios.interceptors.request.use(function (config) {
    // console.log(config.url);
    return config;
  }, function (err) {
    //console.log(err);
    return err;
  });

axios.interceptors.response.use(function(res){
    //console.log(res); 必须返回res
    return res;
}, function(err) {
    console.log(err);
    return err;
})