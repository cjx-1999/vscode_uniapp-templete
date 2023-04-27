<script setup lang="ts">
import { getUserInfo, getUserList } from '@/api/user'

const userList = ref<any>([])
getUserList().then((res) => {
  userList.value = res.data
})
const user = ref({
  name: '',
  age: '',
  like: '',
  id: '',
})
function getUser(name: string) {
  getUserInfo(name).then((res) => {
    user.value = res.data
  })
}
</script>

<template>
  <view bg-white>
    <u-text my-3 font-bold size="50upx" text="用户列表" align="center" class="u-page-title" />

    <u-list class="h-300upx " h-300px>
      <u-list-item
        v-for="(item) in userList"
        :key="item.id"
      >
        <u-cell
          :title="`${item.like} ` + `年龄${item.age}`"
        >
          <template #icon>
            <u-text :text="item.name" font-bold />
          </template>
        </u-cell>
      </u-list-item>
      <u-list-item>
        <u-button type="success" @click="getUser('小红')">
          小红
        </u-button>
        <u-button type="primary" @click="getUser('小明')">
          小明
        </u-button>
        <u-button type="error" @click="getUser('小美')">
          小美
        </u-button>
        {{ user }}
      </u-list-item>
    </u-list>
  </view>
</template>

<style lang="scss" scoped>
</style>
