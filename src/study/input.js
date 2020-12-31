//updated周期调用这个render函数 //Vue.prototype._render
var render = function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("input", {
      directives: [
          //v-model, v-bind
        { name: "model", rawName: "v-model", value: _vm.xx, expression: "xx" }
      ],
      //<input> 标签的 value 属性
      domProps: { value: _vm.xx },
      on: {
        change: _vm.onChange,
        //如果是type=input,使用了指令v-model,Vue会创建这个handler
        input: function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.xx = $event.target.value
        }
      }
    })
  }
  var staticRenderFns = []
  render._withStripped = true
  
  export { render, staticRenderFns }