<template>
  <div class="analysis">统计分析
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
import { getData } from "api/request";
export default {
  data() {
    return {};
  },
  created() {
    // this._getReportInfo();
  },
  methods: {
    _getReportInfo() {
      getData("rt", "getDirectReportProjectListService", {
        provinceCode: "",
        cityCode: "",
        nationaleconomycodeAndname: "",
        approvalDateStart: "",
        approvalDateEnd: "",
        projectName: "",
        page: 1,
        limit: 10
      }).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
