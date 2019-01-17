<template>
  <div class="user-list">
    <div class="crumb">
      <router-link to="/">用户列表</router-link>
    </div>
    <div class="content">
      <Button type="primary" @click="addItem" class="add-btn">添加用户</Button>
      <div class="custom-table">
        <table class="table">
          <tr class="table-title">
            <th>用户名</th>
            <th>地区</th>
            <th>角色属性</th>
            <th>创建日期</th>
            <th>最后修改日期</th>
            <th>最后登录日期</th>
            <th class="isTrueTitle">操作</th>
          </tr>
          <tr v-for="(item,index) in userList" :key="index">
            <td>{{item.loginName}}</td>
            <td>{{item.province?item.province: '' + item.city?item.city:'' + item.county?item.county:''}}</td>
            <td>{{item.roleName}}</td>
            <td>{{item.createAt |date('yyyy-MM-dd')}}</td>
            <td>{{item.updateAt |date('yyyy-MM-dd')}}</td>
            <td>{{item.lastLogin |date('yyyy-MM-dd')}}</td>
            <td class="operate">
              <span @click="updateItem(item)">修改</span>
              <span @click="checkItem(item)">查看</span>
              <span @click="deleteItem(item)">删除</span>
            </td>
          </tr>
        </table>
      </div>
      <div class="page box-flex flex-row boxPadding changeBg">
        <Page
          class='listbox'
          :total="total"
          :page-size="pageSize"
          show-total
        >
          共 {{Math.ceil(total/pageSize)}} 页，{{total}} 个项目
        </Page>
      </div>
    </div>

    <Modal v-model="addStatus.visible">
      <!--添加-->
      <Form class="reg-wrap-x" :model="formItem" ref="regFormCreate" :rules="ruleValidate">
        <!-- <div class="tt">注册</div> -->
        <div class="tt2"><span class="text-red">*</span>用户名：</div>
        <div class="mg">
          <Form-item prop="loginName">
            <Input type="text" class="text_style" size="large" placeholder="6-18 个字符，支持字母、数字、下划线，区分大小写"
                   v-model="formItem.loginName"/>
          </Form-item>
        </div>
        <div class="tt2"><span class="text-red">*</span> 密码：</div>
        <div class="mg">
          <Form-item prop="password">
            <Input type="password" class="text_style" size="large" placeholder="密码为 6-18 位"
                   v-model="formItem.password"/>
          </Form-item>
        </div>
        <div class="tt2"><span class="text-red">*</span> 确认密码：</div>
        <div class="mg">
          <Form-item prop="passwdCheck">
            <Input type="password" class="text_style" size="large" placeholder="请再次输入，密码为 6-18 位"
                   v-model="formItem.passwdCheck"/>
          </Form-item>
        </div>
        <div class="tt2 ping"><span class="text-red">*</span> 角色属性：</div>
        <div class="mg">
          <Form-item prop="userTypeId">
            <Select class="text_style" v-model="formItem.userTypeId">
              <Option :value="item.id" v-for="(item,index) in userRoleList" :key="index">{{item.name}}</Option>
            </Select>
          </Form-item>
        </div>
        <div class="tt2"><span class="text-red">*</span> 联系电话：</div>
        <div class="mg">
          <Form-item prop="phone">
            <Input type="text" class="text_style" size="large" placeholder="请输入联系电话" v-model="formItem.phone"/>
          </Form-item>
        </div>
        <div class="tt2 ping"><span class="text-red">*</span> 电子邮箱：</div>
        <div class="mg">
          <Form-item prop="email">
            <Input size="large" class="text_style" placeholder="请输入邮箱地址" v-model="formItem.email"/>
          </Form-item>
        </div>

        <div slot="footer">
          <Button type="primary">确定添加</Button>
          <!-- <Button type="primary" @click="action">提交</Button> -->
        </div>
      </Form>
    </Modal>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getData} from "api/request"

  export default {
    data() {
      return {
        total: 0,
        page: 1,
        pageSize: 20,
        formItem: {
          loginName: '',
          password: '',
          passwdCheck: '',
          userTypeId: '',
          phone: '',
          email: '',
          userTypeName: '' // 新增，管理员或者普通用户
        },
        ruleValidate: {
          loginName: [
            {
              required: true,
              message: '用户名不能为空',
              trigger: 'blur'
            },
            {
              trigger: 'blur',
              message: '6-18个字符，支持字母，数字，下划线',
              pattern: /^\w{6,18}$/,
            }
          ],
          userTypeId: [
            {
              required: true,
              message: '角色属性不能为空',
            }
          ],
          password: [
            {
              trigger: 'blur',
              required: true,
              message: '密码为 6-18 位',
              min: 6,
              max: 18,
            }
          ],
          passwdCheck: [
            {
              trigger: 'blur',
              required: true,
              message: '密码为 6-18 位',
              min: 6,
              max: 18,
            },
            {
              trigger: 'blur',
              validator: this.validatePassCheck,
            }
          ],
          phone: [
            {
              required: true,
              message: '联系电话不能为空',
              trigger: 'blur'
            }
          ],
          email: [
            {
              required: true,
              type: 'email',
              message: '邮箱错误',
              trigger: 'blur'
            }
          ],
        },
        userList: [],
        userRoleList: [],
        addStatus: { // 新增弹出框状态
          visible: false,
          loading: false
        }
      }
    },
    created() {
      this._getUserList()
    },
    methods: {
      _getRole() {
        getData("rt", "tSysRoleManagementList", {
          parentId: 0
        }).then(res => {
          console.log(res)
          this._getUserRoleName(res.sysRoleForAddUser)
        })
      },
      _getUserRoleName(data) {
        this.userRoleList = data
        for (let i = 0; i < this.userList.length; i++) {
          for (let j = 0; j < this.userRoleList.length; j++) {
            if (this.userList[i].roleId === this.userRoleList[j].id) {
              this.userList[i].roleName = this.userRoleList[j].name
            }
          }
        }
      },
      _getUserList() {
        getData("rt", "userInfoList", {
          page: this.page,
          limit: this.pageSize
        }).then(res => {
          this._getTotal(res.count)
          this._userList(res.result)
          this._getRole()
        })
      },
      _getTotal(data) {
        this.total = data
      },
      _userList(data) {
        this.userList = data
      },
      addItem() {
        this.addStatus.visible = true
      },
      updateItem() {
      },
      checkItem() {
      },
      deleteItem() {
      },
      validatePassCheck(rule, value, callback) {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.formItem.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      }
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'
  .user-list
    padding: 20px
    .crumb
      margin-bottom: 10px
      a
        font-size: $font-size-medium-x
        color: #333
    .content
      padding: 20px
      background: #fff
      .add-btn
        margin-bottom: 20px
        text-align: center
        background: $color-background-btn
        cursor: pointer
        border: none !important
        outline: none !important
      .custom-table
        .table
          width: 100%
          border: 1px solid #d6d8da
          border-top: none
          border-spacing: 0
          border-collapse: collapse
          color: $color-text
          .table-title
            th
              border: 1px solid #d6d8da
          th, td
            padding: 8px 10px
          th
            font-weight: bold
            background: #F1F5F8
            overflow: hidden
            // white-space: nowrap
            text-overflow: ellipsis
            text-align: left
          .isTrueTitle
            width: 90px
            text-align: center
          td
            border-left: 1px solid #d6d8da
            border-right: 1px solid #d6d8da
          .cell
            text-align: left
          tr:nth-of-type(even) td
            background-color: #F4F8FB
          .operate
            display: flex
            width: 120px
            border-left: 0
            border-right: 0
            span
              display: inline-block
              flex: 1
              text-align: center
              cursor: pointer
      .page
        margin-top: 10px

</style>
