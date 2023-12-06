<template>
    <h3>基本信息</h3>
  <hr>
  <el-descriptions
    class="margin-top"
    :column="4"
    :size="size"
    :style="blockMargin"
  >
    <el-descriptions-item label="专家姓名：">陈某某</el-descriptions-item>
    <el-descriptions-item label="年龄：">23</el-descriptions-item>
    <el-descriptions-item label="政治面貌：">群众</el-descriptions-item>
    <el-descriptions-item label="职称：">高级</el-descriptions-item>
    <el-descriptions-item label="工作年限：">10</el-descriptions-item>
    <el-descriptions-item label="职位：">xxx除处长</el-descriptions-item>
    <el-descriptions-item label="联系电话：">18584886658</el-descriptions-item>
    <el-descriptions-item label="所属公司：">交建集团</el-descriptions-item>
    <el-descriptions-item label="工作区域：">成都片区</el-descriptions-item>
    <el-descriptions-item label="备注："></el-descriptions-item>
    <!-- <el-descriptions-item label="Remarks">
      <el-tag size="small">School</el-tag>
    </el-descriptions-item> -->
    <!-- <el-descriptions-item label="Address"
      >No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </el-descriptions-item>
    <el-descriptions-item label="Address"
      >No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </el-descriptions-item>
    <el-descriptions-item label="Address"
      >No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </el-descriptions-item> -->
  </el-descriptions>
  <div>
    评标分类（一级）：  A01 工程技术类
  </div>
  <div>
    评标分类（一级）：  A01 工程技术类
  </div>
  <div>
    评标分类（一级）：  A01 工程技术类
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import * as iconsVue from '@element-plus/icons-vue'

const size = ref('')
const iconStyle = computed(() => {
  const marginMap = {
    large: '8px',
    default: '6px',
    small: '4px',
  }
  return {
    marginRight: marginMap[size.value] || marginMap.default,
  }
})
const blockMargin = computed(() => {
  const marginMap = {
    large: '32px',
    default: '28px',
    small: '24px',
  }
  return {
    marginTop: marginMap[size.value] || marginMap.default,
  }
})
</script>

<style scoped>
h3{
  margin-bottom: 20px;
}
.el-descriptions {
  margin-top: 20px;
}
.cell-item {
  display: flex;
  align-items: center;
}
.margin-top {
  margin-top: 20px;
}
</style>
