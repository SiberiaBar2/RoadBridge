<template>
  <el-row :style="{marginBottom: '20px'}">
    <el-col :span="8">
      <el-button size="large">初步评审</el-button>
    </el-col>
    <el-col :span="8">
      <el-button size="large">详细评审</el-button>
    </el-col>
    <el-col :span="8">
      <el-button size="large">评标结果</el-button>
    </el-col>
  </el-row>
  <el-row :style="{marginBottom: '8px'}">
    <el-col :span="8">
      <el-button size="large">初步评审</el-button>
    </el-col>
    <el-col :span="8">
      <el-button size="large">详细评审</el-button>
    </el-col>
    <el-col :span="8">
      <el-button size="large">最终排名</el-button>
    </el-col>
  </el-row>
  <el-row :style="{marginBottom: '8px'}">
    <el-col :span="8">
      <el-button size="large">评审汇总</el-button>
    </el-col>
    <el-col :span="8">
      <el-button size="large">评审汇总</el-button>
    </el-col>
    <el-col :span="8">
      <el-button size="large">报告签名</el-button>
    </el-col>
  </el-row>
  <el-row :style="{marginBottom: '8px'}">
    <el-col :span="8"></el-col>
    <el-col :span="8">
      <el-button size="large">二次评审</el-button>
    </el-col>
    <el-col :span="8"></el-col>
  </el-row>
  <el-row :style="{marginBottom: '8px'}">
    <el-col :span="8"></el-col>
    <el-col :span="8">
      <el-button size="large">最终评审</el-button>
    </el-col>
    <el-col :span="8"></el-col>
  </el-row>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
</script>
