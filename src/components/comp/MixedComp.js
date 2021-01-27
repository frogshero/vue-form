export default {
  data: function() {
    return {
        // sss: 'xxxxxxx'
    }
  },
  created: function () {
    this.hello()
  },
  methods: {
    hello() {
      console.log('hello from mixin!')
    },
    change() {
      console.log('--change');
    },
    dd() {
      console.log(this.sss);
    },
  }
}