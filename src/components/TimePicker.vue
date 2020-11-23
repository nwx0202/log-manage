<template>
  <van-popup
    v-model="isShow"
    position="bottom" ref="popup"
    :style="{height: height}"
    class="time-picker"
    :close-on-click-overlay="false"
    @click-overlay="closePopup">
    <div class="picker-header">
      <van-button type="default" size="small" @click="closePopup">取消</van-button>
      <div class="title">选择时间段</div>
      <van-button type="info" size="small" @click="confirm">确定</van-button>
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
    // 关闭弹框
    closePopup() {
      this.$emit('closed', false);
    },
    
    // 选中时间范围
    confirm() {
      this.$emit('closed', false);
    }
  },
}
</script>

<style lang="scss">
.time-picker {
  .picker-header {
    display: flex;
    padding: 0 10px;
    line-height: 40px;
    font-size: 14px;
    text-align: center;
    align-items: center;
    .title {
      flex: 2;
    }
  }
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