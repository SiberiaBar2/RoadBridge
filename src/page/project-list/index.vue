<template>
    <el-row>
      <el-col :span="18">
        <el-radio-group>
          <el-radio-button label="包件名称A" />
          <el-radio-button label="包件名称B" />
        </el-radio-group>
      </el-col>
      <el-col :span="6" class="text-right">
        <el-button type="primary" @click="goBackToList">返回列表</el-button>
      </el-col>
    </el-row>
    
      <el-table :data="tableData" :border="parentBorder" style="width: 100%">
        <el-table-column type="expand">
          <template #default="props">
  
              <el-table :data="props.row.family" :border="childBorder">
                <el-table-column prop="unit" />
                <el-table-column prop="state" />
                <el-table-column/>
  
              </el-table>
              
        
          </template>
        </el-table-column>
        <el-table-column label="投标单位" prop="unit" />
        <el-table-column label="状态" prop="state" />
        <el-table-column label="操作" prop="operate">
          <el-button link type="primary" size="small" @click="handleDetailClick">确认金额</el-button>
          <el-button link type="primary" size="small" @click="handleEditClick">详情</el-button>
        </el-table-column>
    </el-table>
  
  
      <el-pagination
        v-model:current-page="currentPage4"
        v-model:page-size="pageSize4"
        :page-sizes="[100, 200, 300, 400]"
        :small="small"
        :disabled="disabled"
        :background="true"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
  
  </template>
    
    <script lang="ts" setup>
    import { ref } from 'vue'
    
  
    const parentBorder = ref(false)
    const childBorder = ref(false)
    const currentPage4 = ref(4)
    const pageSize4 = ref(100)
    const small = ref(false)
  const background = ref(false)
  const disabled = ref(false)
  
    const tableData = [
      {
        unit: '四川省路桥xxx工程公司',
        state: '通过',
        family: [
          {
            unit: '陈xx评委',
            state: '评审通过',
          },
          {
            unit: '陈xx评委',
            state: '评审通过',
          },
          {
            unit: '陈xx评委',
            state: '评审通过',
          },
          {
            unit: '陈xx评委',
            state: '评审通过',
          },
          {
            unit: '陈xx评委',
            state: '评审通过',
          },
        ],
      },
      {
        unit: '四川省路桥xxx工程公司',
        state: '通过',
  
        family: [
          {
            unit: '陈xx评委',
            state: '评审通过',
          },
          {
            unit: '陈xx评委',
            state: '评审通过',
          },
          {
            unit: '陈xx评委',
            state: '评审通过',
          },
          {
            unit: '陈xx评委',
            state: '评审通过',
          },
          {
            unit: '陈xx评委',
            state: '评审通过',
          },
        ],
      },
  
      
    ];
    const handleDetailClick = () => {
    // Handle detail button click
    console.log('Detail button clicked');
  };
  
  const handleEditClick = () => {
    // Handle edit button click
    console.log('Edit button clicked');
  };
  const goBackToList = () => {
    // Handle "返回列表" button click
    console.log('返回列表 button clicked');
    // Add your logic to navigate back to the list
  };
  const handleSizeChange = (val: number) => {
    console.log(`${val} items per page`)
  }
  const handleCurrentChange = (val: number) => {
    console.log(`current page: ${val}`)
  }
    </script>
    <style scoped>
    .text-right {
      text-align: right;
    }
  
    </style>