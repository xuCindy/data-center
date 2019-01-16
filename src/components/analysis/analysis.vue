<template>
  <div class="analysis">
    <container>
      <sidebar :list="list"></sidebar>
    </container>
  </div>
</template>

<script type="text/ecmascript-6">
  import Sidebar from 'components/sidebar/sidebar'
  import Container from 'base/container/container'
  import {getData} from "api/request"

  export default {
    data() {
      return {
        list: [
          {
            text: '环评申报',
            path: '/system-role',
            child: [
              {
                text: '按区域统计',
                path: '/system-role',
              },
              {
                text: '按流域统计',
                path: '/system-role',
              }
            ]
          },
          {
            text: '环评审批',
            path: '/system-interface',
            child: [
              {
                text: '按区域统计',
                path: '/system-role',
              },
              {
                text: '按流域统计',
                path: '/system-role',
              }
            ]
          },
          {
            text: '企业自验',
            path: '/system-role',
            child: [
              {
                text: '按区域统计',
                path: '/system-role',
              },
              {
                text: '按流域统计',
                path: '/system-role',
              }
            ]
          },
          {
            text: '环评综合',
            path: '/system-role',
          },
          {
            text: '排污许可',
            path: '/system-role',
            child: [
              {
                text: '许可排放量-大气',
                path: '/system-role',
              },
              {
                text: '许可排放量-水',
                path: '/system-role',
              },
              {
                text: '许可证发证情况',
                path: '/system-role',
              }
            ]
          }
        ],
        params: {
          provinceCode: '',
          cityCode: '',
          nationaleconomycodeAndname: '',
          approvalDateStart: '',
          approvalDateEnd: '',
          projectName: '',
          page: 1,
          limit: 10
        }
      }
    },
    created() {
      this._getReportInfo()
    },
    methods: {
      _getReportInfo() {
        getData("rt", "getDirectReportProjectListService", this.params).then(res => {
          console.log(res)
        })
      }
    },
    components: {
      Sidebar,
      Container
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
