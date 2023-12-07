<template>
  <h3>基本信息</h3>
<hr>
<el-descriptions
  class="margin-top"
  :column="4"
  :size="size"
  :style="blockMargin"
>
  <el-descriptions-item label="采购项名称：">川西铁路-1号x某物资</el-descriptions-item>
  <el-descriptions-item label="招标类型：">23</el-descriptions-item>
  <el-descriptions-item label="政治面貌：">群众</el-descriptions-item>
  <el-descriptions-item label="职称：">高级</el-descriptions-item>
  <el-descriptions-item label="工作年限：">10</el-descriptions-item>
  <el-descriptions-item label="职位：">xxx除处长</el-descriptions-item>
  <el-descriptions-item label="联系电话：">18584886658</el-descriptions-item>
  <el-descriptions-item label="所属公司：">交建集团</el-descriptions-item>
  <el-descriptions-item label="工作区域：">成都片区</el-descriptions-item>
  <el-descriptions-item label="备注："></el-descriptions-item>
  <el-descriptions-item label="备注："></el-descriptions-item>
</el-descriptions>

<el-space direction="vertical" alignment="start" :size="30" >


    <!-- <el-space wrap :size="size">
      <el-card v-for="i in 1" :key="i" class="box-card" style="width: 250px">
        <template #header>
          <div class="card-header">
            <span>陈XX评委</span><span style="float: right;">待评审</span>
          </div>
        </template>
        <div>
          <table>
            <thead>
              <tr>
                <th>序号</th>
                <th>规则</th>
                <th>通过/不通过</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>行1，列1</td>
                <td>行1，列2</td>
                <td>行1，列3</td>
              </tr>
              <tr>
                <td>行2，列1</td>
                <td>行2，列2</td>
                <td>行2，列3</td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr>
        <div><span>评审金额</span> <span style="margin-left: 70px;">-</span></div>
      </el-card>
    </el-space> -->
    <div>
    <!-- First Card -->
    <CustomCard :header="headers[0]" :content="tableContent[0]" />

    <!-- Second Card -->
    <CustomCard :header="headers[1]" :content="tableContent[1]" />

    <!-- Third Card -->
    <CustomCard :header="headers[2]" :content="tableContent[2]" />
  </div>
  </el-space>

</template>

<script setup lang="ts">
import { computed, ref,defineComponent } from 'vue'
import * as iconsVue from '@element-plus/icons-vue'

// Define a type for the possible values of size
type SizeType = 'large' | 'default' | 'small'

const size = ref<SizeType>('default') // Set a default value
const iconStyle = computed(() => {
const marginMap: Record<SizeType, string> = {
  large: '8px',
  default: '6px',
  small: '4px',
}
return {
  marginRight: marginMap[size.value] || marginMap.default,
}
})
const blockMargin = computed(() => {
const marginMap: Record<SizeType, string> = {
  large: '32px',
  default: '28px',
  small: '24px',
}

return {
  marginTop: marginMap[size.value] || marginMap.default,
}
})

const headers = ref(['陈XX评委', '张YY评委', '王ZZ评委']);
const tableContent = [
  [
    ['行1，列1', '行1，列2', '行1，列3'],
    ['行2，列1', '行2，列2', '行2，列3'],
  ],
  [
    ['行1，列1', '行1，列2', '行1，列3'],
    ['行2，列1', '行2，列2', '行2，列3'],
  ],
  [
    ['行1，列1', '行1，列2', '行1，列3'],
    ['行2，列1', '行2，列2', '行2，列3'],
  ],
];

// Your CustomCard component definition
const CustomCard = defineComponent({
  props: {
    header: String,
    content: Array,
  },
  setup(props) {
    return {
      // You can access props.header and props.content here
    };
  },
});
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
