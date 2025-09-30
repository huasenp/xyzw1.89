window.wx = {
  getSystemInfo() {}, // 用来获取机型性能
  getStorageInfo() {}, // 用来获取存储信息
  onShow(callback) {
    setTimeout(() => {
      callback({
        scene: '0',
        query: {},
        shareTicket: [],
      });
    }, 1000);
  },
  onHide(callback) {},
};

// window.HSDK = {
//   onLogin(data) {},
// };
window.__HORTOR_SDK__ = {
  tga: {
    track() {},
  },
};
