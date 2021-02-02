// pages/useComponent/use.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    m:15
  },
  addM(e){
    this.setData({
      m:this.data.m+e.detail.n
    })
  }
})