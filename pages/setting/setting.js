// pages/setting/setting.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: true
  },
  changeState: function () {
    this.data.isShow = !this.data.isShow
    app.globalData.isShow = this.data.isShow
    //获取页码数进行刷新，跟当前页面的刷新的方式是一样的
    var pages = getCurrentPages()
    pages[pages.length - 2].onLoad()

  },
  onLoad: function () {
    this.data.isShow = app.globalData.isShow
    this.setData({
      isShow: this.data.isShow
    })
  }
})