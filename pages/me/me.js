//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    pagenum: 0,
    pagesize: 0,
    sort: "",
    key: "",
    list: [],
    isShow: true
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
    this.data.sort = app.globalData.sort
    this.data.pagenum = app.globalData.pagenum
    this.data.pagesize = app.globalData.pagesize
    this.data.key = app.globalData.key
    this.data.isShow = app.globalData.isShow
    console.log(this.data.isShow)
    this.setData({
      isShow: this.data.isShow
    })
    if (this.data.isShow)
      this.http(app.globalData.url, this.data.pagenum, this.data.pagesize, this.data.sort, app.globalData.key, this.callBack)
  },
  gotoSetting: function () {
    wx.navigateTo({
      url: '../setting/setting'
    })
  },
  gotoIndex: function () {
    wx.showModal({
      cancelColor: 'cancelColor',
      title: '提示',
      content: '确定返回首页？',
      success(res) {
        if (res.confirm) {
          wx.navigateTo({
            url: '../index/index'
          })
          wx.showToast({
            title: 'Welcome',
            icon: 'success',
            duration: 2000
          })
        } else if (res.cancel) {
          return
        }
      }
    })
  },
  http: function (reqUrl, pagenum, pagesize, sort, appkey, callBack) {
    wx.request({
      url: reqUrl + "?pagenum=" + pagenum + "&pagesize=" + pagesize + "&sort=" + sort + "&appkey=" + appkey,
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        callBack(res)
      }
    })
  },
  callBack: function (res) {
    this.data.list = res.data.result.list
    this.setData({
      list: this.data.list,
    })
    console.log(this.data.list)
  }
})