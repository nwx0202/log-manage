<template>
  <div class="project">
    <van-cell>
      <van-field
        readonly
        clickable
        required
        name="timeRangeField"
        label="起止时间"
        :value="selectedTimeRange"
        placeholder="请选择起止时间"
        @click="showTimeRangePicker = true" />
        <TimeRange 
          :isShow="showTimeRangePicker" />
        <!-- <van-popup v-model="showPeriodPicker" position="bottom" :style="{height: '40%'}">
          <van-datetime-picker
            v-model="currentPeriod"
            type="time"
            :min-hour="10"
            :max-hour="20"
          />
        </van-popup> -->
    </van-cell>

    <van-cell>
      <van-field
        readonly
        clickable
        required
        name="projectField"
        label="参与项目"
        :value="selectedProject"
        placeholder="请选择参与项目"
        @click="showProjectPicker = true" />
      <van-popup v-model="showProjectPicker" position="bottom" :style="{height: '40%'}">
        <van-picker
          show-toolbar
          :columns="columns"
          @cancel="showProjectPicker = false">
          <template #title>
            <van-search
              v-model="searchProjectVal"
              placeholder="请输入搜索关键词"
              input-align="center"
            />
          </template>
        </van-picker>
      </van-popup>
    </van-cell>
    
  </div>
</template>

<script>
import TimeRange from '@/components/TimeRange'

export default {
  name: 'Project',
  components: {
    TimeRange
  },
  data() {
    return {
      selectedProject: '南京',
      showProjectPicker: false,
      columns: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'],
      searchProjectVal: '',
      selectedTimeRange: '11:00-12:00',
      showTimeRangePicker: false
    }
  },
}
</script>

<style lang="scss">
.project {
  padding: .1rem .2rem;
  background-color: #fff;

  .van-picker__toolbar {
    padding-top: 8px;
  }

  .van-search {
    flex: 2;
  }
}
</style>