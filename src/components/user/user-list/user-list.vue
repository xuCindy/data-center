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
          telephone: '',
          identityCode: '',
          organisationCode: '',
          address: '',
          email: '',
          userTypeId: '', // 新增，管理员或者普通用户id
          userTypeName: '' // 新增，管理员或者普通用户
        },
        userList: [],
        userRoleList: []
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

      },
      updateItem() {
      },
      checkItem() {
      },
      deleteItem() {
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
