const sleep = function(delay) {
    for(var t = Date.now(); Date.now() - t <= delay;);
}

export default {
    sleep
}

