//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  gotoIndex: function() {
    wx.showModal({
      cancelColor: 'cancelColor',
      title: '提示',
      content: '确定返回首页？',
      success(res){
        if(res.confirm){
          wx.navigateTo({
            url: '../index/index'
          })
          wx.showToast({
            title: 'Welcome',
            icon: 'success',
            duration: 2000
          })
        }else if(res.cancel){
          return
        }
      }
    })
  },
})