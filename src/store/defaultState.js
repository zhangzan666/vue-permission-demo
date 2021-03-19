export default {
  get UserToken () {
    return localStorage.getItem('token')
  },
  set UserToken (value) {
    localStorage.setItem('token',value)
  }
}

/**
 * 在存储vuex 的同时 ， 把 token 存进 localStorage
 */