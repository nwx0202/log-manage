<template>
  <div class="time-range">
    <van-popup ref="popup" v-model="isShow" position="bottom" :style="{height: height}">
      <div class="time-cell">
        <div class="time-header">开始时间</div>
        <div class="time-body">
          <ul class="wrap">
            <li class="item" v-for="hour in hours" :key="hour">{{hour}}</li>
          </ul>
          <ul class="wrap">
            <li class="item" v-for="minute in minutes" :key="minute">{{minute}}</li>
          </ul>
        </div>
      </div>
      <div class="time-cell">
        <div class="time-header">结束时间</div>
        <div class="time-body">
          <ul class="wrap">
            <li class="item" v-for="hour in hours" :key="hour">{{hour}}</li>
          </ul>
          <ul class="wrap">
            <li class="item" v-for="minute in minutes" :key="minute">{{minute}}</li>
          </ul>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'TimeRange',
  props: {
    height: {
      type: String,
      default: '40%'
    },
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
    }
  },
  computed: {
    hours() {
      let arr = [];
      for (let i = 0; i < 24; i++) {
        if (i < 10) {
          arr.push('0' + i); 
        } else {
          arr.push(+i);
        }
      }
      return arr;
    },
    minutes() {
      console.log(this.$refs.popup);
      let arr = [];
      for (let i = 0; i < 60; i++) {
        if (i < 10) {
          arr.push('0' + i); 
        } else {
          arr.push(+i);
        }
      }
      return arr;
    },
    // timeHeigh() {
    //   console.log(this.$refs.popup);
    // }
  },
}
</script>

<style lang="scss">
.time-range {
  .van-popup {
    display: flex;
  }
  .time-cell {
    flex: 1;
    text-align: center;
  }
  .time-body {
    display: flex;
  }
  .wrap {
    flex: 1;
  }
}
</style>