// pages/campus/campus.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageItems: [{
      imgsrc: "https://www.shou.edu.cn/_upload/article/images/e1/ff/c3d6cd5e4f94a04860e1eb7edc12/bafc7cc8-c08e-4158-bf7a-96f4c68f3517.jpg",
      link: "http://www.shou.edu.cn/2020/0623/c790a271478/page.htm"
    }, {
      imgsrc: "https://www.shou.edu.cn/_upload/article/images/4c/a6/1207996c479e977fe48bda8ae0c8/9600d30c-cd16-49ea-ba38-665abef88ae2.jpg",
      link: "http://www.shou.edu.cn/2020/0623/c790a271495/page.htm"
    }, {
      imgsrc: "https://www.shou.edu.cn/_upload/article/images/87/5e/f581adb54dda826652fbf4dd39b8/f4ee0d7e-fbce-4693-838c-0c37502c7b91.jpg",
      link: "http://www.shou.edu.cn/2020/0616/c790a271253/page.htm"
    },{
      imgsrc: "https://www.shou.edu.cn/_upload/article/images/af/e0/95f585d6473782a65746330dc210/b7b6b518-0696-4f97-8266-9225020742e0.jpg",
      link: "https://www.shou.edu.cn/"
    },{
      imgsrc: "https://www.shou.edu.cn/_upload/article/images/cd/e3/428a7ddd4da28dd1fea8f33cc31f/8fe8561b-92ed-49f1-a83b-3ff59f7bef86.jpg",
      link: "http://www.shou.edu.cn/2020/0623/c790a271499/page.htm"
    },{
      imgsrc: "https://www.shou.edu.cn/_upload/article/images/17/ce/a03bc32749feb0d4999cdcf2a199/92f348cc-8c2f-4c92-9064-781477549c87.jpg",
      link: "http://www.shou.edu.cn/2020/0619/c790a271412/page.htm"
    }
  ],
    info:""
  },
  /*点击图片事件处理函数 */
  imgTap: function (params) {
    console.info(params.currentTarget.dataset.link);
    wx.setStorageSync("link",params.currentTarget.dataset.link)
    wx.navigateTo({
      url: '../out/out',
   })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})