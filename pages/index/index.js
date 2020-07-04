//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },

  learnSoftware: function() {
    wx.navigateTo({
      url: '../software/software'
    })
  },
  goToCampus: function() {
    wx.switchTab({
      url: '../campus/campus',
    })
  }
})
