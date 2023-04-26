<script setup lang="ts">
const checkboxList1 = reactive([{
  name: '苹果',
  disabled: false,
},
{
  name: '香蕉',
  disabled: false,
},
{
  name: '橙子',
  disabled: false,
}, {
  name: '榴莲',
  disabled: false,
},
])
const userInfo = reactive({
  name: '',
  sex: '',
  like1: [],
  like2: '',
  like3: '',
  suggest: '',

})
const showSex = ref(false)
function hideKeyboard() {
  uni.hideKeyboard()
}
const actions = reactive([
  {
    name: '男',
    color: '#007aff',
  },
  {
    name: '女',
    color: '#007aff',
  },
  {
    name: '保密',
    color: '#007aff',
  },
])
function sexSelect(val: { name: string }) {
  userInfo.sex = val.name
}
// 选择喜好
function checkboxChange(val: string[]) {
  console.log('checkboxChange', val)
}
// 单选框
const radiolist1 = reactive([
  {
    name: '红色',
    disabled: false,
  },
  {
    name: '黄色',
    disabled: false,
  },
  {
    name: '蓝色',
    disabled: false,
  },
  {
    name: '绿色',
    disabled: false,
  },
])
function changeRadio(val) {
  console.log('val', val, userInfo.like3)
}
const show = ref(true)

function submitEvent() {
  // console.log('柴发')
  // show.value = true
  // console.log(show.value, ' show.value')
  alert(`您的选择为:${JSON.stringify(userInfo)}`)
}
</script>

<template>
  <view class="p-2 bg-white">
    <!-- <u-loading-page bg-color="#000" loading-text="加载中..." font-size="24" color="red" /> -->
    <u-text my-3 font-bold align="center" size="50upx" text="简单的问卷" />
    <u-form
      ref="form1"
      label-position="top"
      :model="userInfo"
      label-width="100vw"
    >
      <u-form-item
        ref="item1"
        label="你的姓名是什么?"
        prop="name"
        border-bottom
      >
        <u-input
          v-model="userInfo.name"
          placeholder="请输入内容"
          border="surround"
        />
      </u-form-item>
      <u-form-item
        ref="item1"
        label="你的性别是什么?"
        prop="sex"
        border-bottom
        @click="showSex = true; hideKeyboard()"
      >
        <u-input
          v-model="userInfo.sex"
          disabled
          disabled-color="#ffffff"
          placeholder="请选择性别"
          border="none"
        />
        <template #right>
          <u-icon
            name="arrow-right"
          />
        </template>
      </u-form-item>
      <u-form-item prop="like1" label="你喜欢吃下面的哪种水果?">
        <u-checkbox-group
          v-model="userInfo.like1"
          placement="column"
          @change="checkboxChange"
        >
          <u-checkbox
            v-for="(item, index) in checkboxList1"
            :key="index"
            :custom-style="{ marginBottom: '8px' }"
            :label="item.name"
            :name="item.name"
          />
        </u-checkbox-group>
      </u-form-item>

      <u-form-item prop="like2" label="你喜欢下面那种颜色?">
        <u-radio-group
          v-model="userInfo.like2"
          placement="column"
        >
          <u-radio
            v-for="(item, index) in radiolist1"
            :key="index"
            :custom-style="{ marginBottom: '8px' }"
            :label="item.name"
            :name="item.name"
          />
        </u-radio-group>
      </u-form-item>
      <u-form-item prop="like3" label="你喜欢下面那句话?">
        <u-radio-group
          v-model="userInfo.like3"
          icon-placement="right"
          @change="changeRadio"
        >
          <u-radio mr-2 active-color="red" name="思悠悠，恨悠悠，恨到归时方始休" label="思悠悠，恨悠悠，恨到归时方始休" />
          <u-radio mr-2 active-color="red" name="凤兮凤兮归故乡，遨游四海求其凰" label="凤兮凤兮归故乡，遨游四海求其凰" />
          <u-radio mr-2 active-color="red" name="力拔山兮气盖世" label="力拔山兮气盖世" />
        </u-radio-group>
      </u-form-item>
      <u-form-item prop="suggest" label="你有什么想对我们说的?">
        <u-textarea v-model="userInfo.suggest" placeholder="请输入内容" />
      </u-form-item>
      <u-form-item>
        <u-button type="error" @click="submitEvent">
          提交
        </u-button>
      </u-form-item>
    </u-form>
    <!-- 消息通知 -->
    <u-notify message="提交成功了" :show="show" />

    <u-action-sheet
      :show="showSex"
      :actions="actions"
      title="请选择性别"
      description="如果选择保密会报错"
      @close="showSex = false"
      @select="sexSelect"
    />
  </view>
</template>

<style scoped>
.survey-form {
  display: flex;
  flex-direction: column;
}

.survey-item {
  margin-bottom: 20px;
}

.survey-question {
  font-weight: bold;
  margin-bottom: 10px;
}

.survey-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
</style>
