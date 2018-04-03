<template>
  <div class="container" @click="clickHandle('test click', $event)">

    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container test">
      <input type="text" class="form-control color-red" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>

    <navigator :url="'../test/main?id='+id" hover-class="none">
      <div>跳转到dialog</div>
    </navigator>

    <div class="page">
      <div class="page__hd">
        <div class="page__title">Button</div>
        <div class="page__desc">按钮，WeUI采用小程序原生的按钮为主体，加入一些间距的样式。</div>
      </div>
      <div class="page__bd page__bd_spacing">
        <button class="weui-btn" type="primary">页面主操作 Normal</button>
        <button class="weui-btn" type="primary" disabled="true">页面主操作 Disabled</button>

        <button class="weui-btn" type="default">页面次要操作 Normal</button>
        <button class="weui-btn" type="default" disabled="true">页面次要操作 Disabled</button>

        <button class="weui-btn" type="warn">警告类操作 Normal</button>
        <button class="weui-btn" type="warn" disabled="true">警告类操作 Disabled</button>

        <div class="button-sp-area">
          <button class="weui-btn" type="primary" plain="true">按钮</button>
          <button class="weui-btn" type="primary" disabled="true" plain="true">按钮</button>

          <button class="weui-btn" type="default" plain="true">按钮</button>
          <button class="weui-btn" type="default" disabled="true" plain="true">按钮</button>

          <button class="weui-btn mini-btn" type="primary" size="mini">按钮</button>
          <button class="weui-btn mini-btn" type="default" size="mini">按钮</button>
          <button class="weui-btn mini-btn" type="warn" size="mini">按钮</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'
//import api from '@/utils/apiUtil.js'

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {},
      param:{},
      id:''
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
    this.$http.authorList().then(function (res) {
      console.log(res)
    })
    this.id = 3//路由参数
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

</style>
