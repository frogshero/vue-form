/**
 * 模仿elment this.$prompt
 * @param {*} options 
 * @param {*} callback 
 */
import Vue from 'vue';
import Dlg from './Dlg.vue'
import SelectDlg from './SelectDlg.vue'

/*Vue.extend this就是Vue实例, 这时候Vue实例还没有new出来
var Super = this;
var Sub = function VueComponent (options) {
  this._init(options);  //this指向Vue组件实例
};
Sub.prototype = Object.create(Super.prototype);  //方法创建一个新对象，使用现有的对象来提供新创建的对象的proto。
Sub.prototype.constructor = Sub;  //手动将prototype设置为新对象有一个关键的副作用：它删除了constructor属性。prototype.constructor就是指向构造函数本身
Sub.cid = cid++;
Sub.options = mergeOptions(
  Super.options,
  extendOptions
);
return sub
*/
//SelectDlg只是一个选项对象，Vue.extend返回一个构造函数
const DlgComponent = Vue.extend(SelectDlg); //Vue是构造函数，也是一个对象，在Vue.extend中的this就是指向Vue这个函数对象

//组件实例
let instance;

const Dlgs = function (options, callback, resolve) {    
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
        //       initRender(vm);  //createElement
        //       callHook(vm, 'beforeCreate');  //生命周期回调
        //       initInjections(vm);
        //       initState(vm);  //调用data函数
        //       initProvide(vm);
        //       callHook(vm, 'created');
        //       if (vm.$options.el) {
        //         vm.$mount(vm.$options.el);
        //       }
        //     };

        document.body.appendChild(instance.$el); 
    }
    
    instance.callback = callback;
    instance.resolve = resolve;
    
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
    return new Promise((resolve) => {
      Dlgs(options, callback, resolve);
    });
}

export default Dlgs;