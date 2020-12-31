/*vm.$options
_componentTag:'my-radio'
_parentListeners:undefined
_parentVnode:VNode {tag: 'vue-component-88-my-radio', data: {…}, children: undefined, text: undefined, elm: input, …}
_propKeys:(2) ['label', 'value']
_renderChildren:undefined
parent:VueComponent {_uid: 1, _isVue: true, $options: {…}, _renderProxy: Proxy, _self: VueComponent, …}
propsData:{label: 'xxx'}
*/
var render = function() {
    var _vm = this
    var _h = _vm.$createElement
    //如果自己定义了render函数则用自己的
    //_vm._self是VueComponent, _vm是Proxy实例
    var _c = _vm._self._c || _h
    return _c("input", {
      directives: [
        { name: "model", rawName: "v-model", value: _vm.xx, expression: "xx" }
      ],
      attrs: { type: "radio" },
      domProps: { value: _vm.label, checked: _vm._q(_vm.xx, _vm.label) },
      on: {
        //change是一个数组
        change: [
          function($event) {
            //如果是type=radio,使用了指令v-model,Vue会创建这个
            _vm.xx = _vm.label
          },
          _vm.onChange //这个是组件定义的onChange
        ]
      }
    })
  }
  var staticRenderFns = []
  render._withStripped = true
  
  export { render, staticRenderFns }