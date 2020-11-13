<template>
  <div class="logs">
    <Header :title="title">
      <template #right>
        <van-icon name="plus" color="#1989fa" size="25" class="add-icon" @click="addLogIconClick"></van-icon>
      </template>
    </Header>

    <div class="content">
      <div class="date">
        <div class="current-date" @click="changeDate">
          <van-icon name="arrow-left" size="16"></van-icon>
          &nbsp;{{currentDate}}&nbsp;
          <van-icon name="arrow"  size="16"></van-icon>
        </div>
        
        <div class="datetime-picker">
          <van-popup
            v-model="isShowDatetimePicker"
            position="bottom"
            :style="{height: '50%'}"
          >
            <van-datetime-picker
              v-model="pickerDate"
              type="date"
              :min-date="minDate"
              :max-date="maxDate"
              @confirm="confirmDatetime"
              @cancel="cancelDatetime"
            />
          </van-popup>
        </div>
      </div>

      <div class="cards">
        <div class="card-item">
          <p>我是日志卡片</p>
          <p>我是日志卡片</p>
          <p>我是日志卡片</p>
          <p>我是日志卡片</p>
        </div>
        <div class="card-item">
          <p>我是日志卡片</p>
          <p>我是日志卡片</p>
          <p>我是日志卡片</p>
          <p>我是日志卡片</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Header from '@/components/Header'
import {dateFormat} from '@/utils/datetime'
export default {
  name: 'Logs',
  components: {
    Header
  },
  data() {
    return {
      title: '日志列表',
      currentDate: '',
      isShowDatetimePicker: false,
      pickerDate: new Date(),
      minDate: new Date(1990, 0, 1),
      maxDate: new Date(2025, 11, 30)
    }
  },
  mounted() {
    // 初始化时间
    this.getCurrentTime();
    // 测试
    this.getDate();
  },
  methods: {
    // 测试
    getDate() {
       axios.get('/api/system/get').then((res)=>{
        console.log(res);
      });
    },
    
    // 新建日志
    addLogIconClick() {
      this.$router.push({name: 'Project'});
    },

    // 打开弹框时间
    changeDate() {
      this.isShowDatetimePicker = !this.isShowDatetimePicker;
    },

    // 初始化时间
    getCurrentTime() {
      this.currentDate = dateFormat(new Date());
    },

    // 选择时间
    confirmDatetime(value) {
      this.pickerDate = value;
      this.currentDate = dateFormat(value);
      this.isShowDatetimePicker = false;
    },

    // 关闭popup
    cancelDatetime() {
      this.isShowDatetimePicker = false;
    }
  },
}
</script>

<style lang="scss">
.logs {
  .current-date {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #656b79;
    font-size: .32rem;
    line-height: .8rem;
    text-align: center;
  }

  .cards {
    padding: 0 .3rem .5rem;
  }
  .card-item {
    margin-bottom: 15px;
    padding: .2rem .3rem;
    background-color: #fff;
    line-height: 1.3;
    box-shadow: 1px 2px 2px 1px #ccc;
  }
}
</style>