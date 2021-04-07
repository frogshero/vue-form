/**
 * 模仿elment this.$prompt
 * @param {*} options 
 * @param {*} callback 
 */
import Vue from 'vue';
import Dlg from './Dlg.vue'
import SelectDlg from './SelectDlg.vue'

/*Vue.extend 主要代码 this就是Vue实例 主要代码
var Super = this;
var Sub = function VueComponent (options) {
  this._init(options);
};
Sub.prototype = Object.create(Super.prototype);  //方法创建一个新对象，使用现有的对象来提供新创建的对象的proto。
Sub.prototype.constructor = Sub;
Sub.cid = cid++;
Sub.options = mergeOptions(
  Super.options,
  extendOptions
);
return sub
*/
const DlgComponent = Vue.extend(SelectDlg);

//组件实例
let instance;

const Dlgs = function (options, callback) {    
    if (!instance) {
        instance = new DlgComponent({el: document.createElement('div')}); //就是调用上面的this._init(options);
        //     Vue.prototype._init = function (options) { 主要代码
        //       var vm = this;
        //       vm._uid = uid$3++;
        //       vm.$options = mergeOptions(
        //         resolveConstructorOptions(vm.constructor),
        //         options || {},
        //         vm
        //       );
        //       vm._self = vm;
        //       initLifecycle(vm);
        //       initEvents(vm);
        //       initRender(vm);
        //       callHook(vm, 'beforeCreate');  //生命周期回调
        //       initInjections(vm);
        //       initState(vm);
        //       initProvide(vm);
        //       callHook(vm, 'created');
        //       if (vm.$options.el) {
        //         vm.$mount(vm.$options.el);
        //       }
        //     };

        document.body.appendChild(instance.$el); 
    }
    
    instance.callback = callback;
    
    Vue.nextTick(() => {
        //直接向实例的data和prop赋值
        instance.showDlg = true;
        instance.aa = 5;
        instance.options = options;
    });    
    // console.log(instance)
}

Dlgs.user = (message, options, callback) => {
    Object.assign(options, {message})
    Dlgs(options, callback);
}

export default Dlgs;