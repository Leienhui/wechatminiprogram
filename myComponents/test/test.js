// myComponents/test/test.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    info:{
      type:String,
      value:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    a:1,
    b:2,
    c:3
  },

  /**
   * 组件的方法列表
   */
  methods: {
    AddB(){
      this.setData({
        b:this.data.b+1
      })
    },
    addM(){
      // 触发一个自定义事件,为什么要触发一个自定义事件呢，因为儿子要向父亲通信
      // 子组件要改变父组件的properties的时候，就必须使用triggerEvent进行自定义事件的发送，父亲用bind:addM="函数名称"来接收这个自定义事件,然后到父组件的js中取编写这个函数
      this.triggerEvent('addM',{n:3})
    }
  }
})
