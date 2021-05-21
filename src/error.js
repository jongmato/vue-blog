import Vue from 'vue'

Vue.config.errorHandler = e => {
  console.log('error')
  Vue.prototype.$toast.error(e.message)
  console.error(e.message)
}
