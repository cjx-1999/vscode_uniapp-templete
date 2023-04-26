<script setup lang="ts">
onLaunch(() => {
  console.log('App Launch')
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>

<style lang="scss">
@import "@/uni_modules/uview-plus/index.scss";
@import '@/uni_modules/uview-plus/theme.scss';
@import "@/colorui/main.css";
@import "@/colorui/icon.css";
@import "./static/css/app.scss"; /* 你的项目css */
</style>
