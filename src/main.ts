import { createSSRApp } from 'vue'
import { userStore } from './store/user'
import App from './App.vue'
import 'uno.css'
import store from './store'
import uviewPlus from '@/uni_modules/uview-plus'

uni.$u.setConfig({
  // 修改$u.config对象的属性
  config: {
    // 修改默认单位为rpx，相当于执行 uni.$u.config.unit = 'rpx'
    // unit: 'rpx',最好不要修改，因为uniapp的组件默认单位是px
  },
  // 修改$u.props对象的属性
  props: {
    // 修改radio组件的size参数的默认值，相当于执行 uni.$u.props.radio.size = 30
    // radio: {
    //   size: 15,
    // },
  },
})
export function createApp() {
  const app = createSSRApp(App)
  app.use(uviewPlus)
  app.use(store)
  console.log(userStore().user, '这是我的名字')

  return {
    app,
  }
}
