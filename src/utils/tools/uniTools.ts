/**
 * 封装uni.showToast
 * @param title 提示内容
 * @param icon 图标
 * @param duration 显示时间
 * @param mask 是否显示遮罩
 */
type Icon = 'success' | 'loading' | 'none' | 'error' | undefined

export function showToast(title: string, icon: Icon = 'none', duration = 2000, mask = false) {
  uni.showToast({
    title,
    icon,
    duration,
    mask,
  })
}
