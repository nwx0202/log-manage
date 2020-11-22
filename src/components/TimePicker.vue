<template>
  <van-popup v-model="isShow" position="bottom" ref="popup" :style="{height: height}" class="time-picker">
    <div class="picker-header">
      选择时间段
    </div>
    <div class="container">
      <van-datetime-picker
        type="time"
        :show-toolbar="false"
        :value="currentDate1"
        :min-hour="minHour"
        :max-hour="maxHour"
        @input="onInput"
      />
      <span>至</span>
      <van-datetime-picker
        type="time"
        :show-toolbar="false"
        :value="currentDate2"
        :min-hour="minHour"
        :max-hour="maxHour"
        @input="onInput"
      />
    </div>
  </van-popup>
</template>

<script>
export default {
  name: 'TimePicker',
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
      currentDate1: '12:10',
      currentDate2: '23:10',
      minHour: 0,
      maxHour: 23,
    }
  },
  methods: {
    onInput(event) {
      this.currentDate = event;
    },
  },
}
</script>

<style lang="scss">
.time-picker {
  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .van-picker-column {
    width: 45px;
  }
}
</style>