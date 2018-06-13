
/**
 * Created by yuchen on 2018/4/2.
 */
//封装httpApi
import request from './httpUtil'
const host = "https://h5api.xxxxx.com"
const api = {
  // test地址
  authorList:() => request.get(`${host}/index/list_author_recommend.html`)
}

// export default api
export default { //作为组件库(install)
  install: function(Vue,name="$http") {//自定义名字(vue-resource也使用$http)
    Object.defineProperty(Vue.prototype, name, { value: api });//将组件库挂载在原型对象上
  }
}
