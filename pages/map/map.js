// pages/map/map.js
Page({

  /**
   * 点击按钮获得我的位置
   */
  getMyLocation: function (e) {
    var t = this;
    //定位我的位置
    wx.getLocation({
      type: 'gcj02', //获取火星坐标
      success: function (e) {
        var longitude = e.longitude;
        var latitude = e.latitude;
        //设置地图的位置
        t.setData({
          "x": longitude,
          "y": latitude,
          "markers": [{
            "longitude": longitude,
            "latitude": latitude,
          }],
        });
      }
    });

  },
  /**
   * 页面的初始数据
   */
  data: {
    "x": "116.404844",
    "y": "39.907103",
    "markers": [{
      "longitude": "116.404844",
      "latitude": "39.907103",
    }],
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