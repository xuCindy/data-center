<template>
  <div class="login">
    <div class="container">
      <!-- 增加头部 -->
      <div class="login-header">
        <div class="dc-title">
          <img src="../data-header/img/logo.png" alt="">
          <span>全国固定污染源数据中心</span>
        </div>
      </div>
      <div class="login-wrapper">
        <div class="dc-login">
          <div class="dc-login-header">
            <img src="../data-header/img/logo.png" alt="">
            <span>全国固定污染源数据中心</span>
          </div>
          <Form
            ref="loginForm"
            :model="formItem"
            :rules="ruleValidate"
            class='form'
          >
            <div class="mg">
              <Form-item prop="loginName">
                <div class="inputBox">
                  <Icon type="person" class='icon'></Icon>
                  <Input
                    type="text"
                    size="large"
                    placeholder="用户名"
                    v-model="formItem.loginName"
                    @on-enter="handleSubmit"/>
                </div>
              </Form-item>
            </div>
            <div class="mg">
              <Form-item prop="password">
                <div class="inputBox">
                  <Icon type="android-lock" class='icon'></Icon>
                  <Input type="password" size="large" placeholder="密码"
                         v-model="formItem.password"
                  />
                </div>
              </Form-item>
            </div>
            <div class="mgt-l">
              <Button
                type="info"
                size="large"
                @click="handleSubmit"
                :loading="isSubmitting"
                class='okbtn'
              >登录
              </Button>
              <div class="formBot">
                <!--<span class="frr" @click="forgetPsw">忘记密码</span>
                <Checkbox v-model="rememberUser">记住密码</Checkbox>-->
              </div>
            </div>
          </Form>
        </div>
        <div class="cloud cloud-one"></div>
        <div class="cloud cloud-two"></div>
      </div>
      <div class="login-footer">
        <dl class="clear">
          <dt>
            <img src="//dcs.conac.cn/image/blue_error.png" alt="">
          </dt>
          <dd>
            <p>Copyright©中华人民共和国环境保护部、环境工程评估中心 版权所有</p>
            <p>通讯地址：北京市朝阳区北苑路28号院 1号楼鸿炜亿家一层受理大厅 邮编：100012 </p>
          </dd>
        </dl>
      </div>
      <div class="daily-tips-title">
        <Icon type="information-circled"></Icon>
        <span>公告：为了获得更好的网站使用体验，请您使用IE9以上版本的IE浏览器访问本网站，其他浏览器可能出现兼容问题</span>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import {mapMutations} from 'vuex'
  import {getData} from "api/request"

  export default {
    data() {
      return {
        ruleValidate: {
          loginName: [
            {
              required: true,
              message: '用户名不能为空',
              trigger: 'blur'
            }
          ],
          password: [
            {
              required: true,
              message: '密码不能为空',
              trigger: 'blur'
            }
          ],
        },
        formItem: {
          loginName: '',
          password: ''
        },
        rememberUser: false,
        isSubmitting: false,
      }
    },
    methods: {
      ...mapMutations({
        setUserInfo: 'SET_USERINFO'
      }),
      handleSubmit() {
        this.$refs['loginForm'].validate(valid => {
          if (valid) {
            this.login()
          } else {
            this.$Message.error('表单验证失败!')
          }
        })
      },
      login() {
        this.isSubmitting = true;
        let _postData = Object.assign({}, this.formItem)
        getData('rt', 'login', _postData).then(_res => {
          console.log(_res)
          window.sessionStorage.setItem('sessionId',_res.sessionId)
          this.getLoginData(_res.user)
        }).catch(_err => {
          this.isSubmitting = false
          this.$Message.error(_err)
        })

      },
      getLoginData(data) {
        let _result = data
        if (_result.roleCode && _result.roleCode === 'EIA') {
          this.setUserInfo(_result)
          this.isSubmitting = false
          this.$router.push('/retrieval')
        } else {
          this.$Modal.warning({
            title: '提示',
            content: '该用户没有权限'
          })
          this.isSubmitting = false
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .login
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    .container
      display: flex
      flex-direction: column
      width: 100%
      height: 100%
      background: #1c77ac url('../../../public/images/light.png') no-repeat center top
      overflow: hidden
      .login-header
        width: 100%
        margin-top: 25px
        height: 55px
        background-color: rgba(0, 0, 0, .2)
      .login-wrapper
        flex: 1

      .login-footer
        height: 70px
        background: #1c77ac

      .daily-tips-title
        display: block
        position: fixed
        top: 0
        width: 100%
        line-height: 25px
        text-align: center
        background-color: #feffce
        border: 0

</style>
