// 封装storage方法 获取sessionStorage中的方法

const STORAGE_KEY = 'mall'

// 设置.setItem方法(属性名,属性值,*是否有子集)
// 获取.getItem方法(属性名,*是否有子集)
// 获取全部.setItem方法()

export default {
  // 设置session中的值 (属性名,属性值,对象下的)
  setItem(key, value, moduleName) {
    // 判断是否要写入到对象中
    if (moduleName) {
      // 获取module中的值
      const val = this.getItem(moduleName)
      // 把要写入的值写进去
      val[key] = value
      // 递归重新写入进去
      this.setItem(moduleName, val)
    } else {
      // 获取session中的值
      const val = this.getItem()
      // 给val 重新写入值
      val[key] = value
      // 写入到session中
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    }
  },
  // 获取session中的值
  getItem(key, moduleName) {
    if (moduleName) {
      const val = this.getItem(moduleName)
      if (val) return val[key]
    }
    return this.getStorage()[key]
  },
  // 获取session中所有的值
  getStorage() {
    //  获取所有的值
    return JSON.parse(window.sessionStorage.getItem() || '{}')
  },
  // 清除值
  clear() {}
}
