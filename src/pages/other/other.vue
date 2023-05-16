<script setup lang="ts">
import { OneDay, famousQuotes } from '@/api/other'
import { randomColor } from '@/utils/tools'
// 每日一言
const day = ref()
OneDay().then((res) => {
  day.value = res.data
})
// 名人名言
const celebrity = ref()
famousQuotes().then((res) => {
  celebrity.value = res.data[0].mingrenmingyan
})
</script>

<template>
  <view bg-white px-2>
    <u-list>
      <u-list-item my-2>
        <u-text text="🎄每日一言:" size="40upx" />
        <view :style="{ color: randomColor() }" v-html="day" />
      </u-list-item>
      <u-list-item my-2>
        <u-text text="🎃名人名言:" size="40upx" />
        <view :style="{ color: randomColor() }">
          {{ celebrity }}
        </view>
      </u-list-item>
    </u-list>
  </view>
</template>

<style lang="scss" scoped>
</style>
