<template>
  <div class="time-range">
    <van-popup v-model="isShow" position="bottom" ref="popup" :style="{height: height}" :close-on-click-overlay="false" @click-overlay="closePopup">
      <div class="picker-header">
        <van-button type="default" size="small" @click="closePopup">取消</van-button>
        <div class="title">选择时间段</div>
        <van-button type="info" size="small" @click="confirm">确定</van-button>
      </div>
      <div class="picker-container" :style="{height: wrapHeight}">
        <div class="picker-column">
          <ul class="wrap" :style="hSScrollTop" @touchstart="handleTouchstart" @touchmove="handleTouchmove" @touchend="handleTouchend">
            <li class="item"
                v-for="hour in hours"
                :key="hour"
                :class="{selected: hour === curH}">
                {{hour}}
            </li>
          </ul>
          <ul class="wrap" :style="mSScrollTop">
            <li class="item" v-for="minute in minutes" :key="minute" :class="{selected: minute === curM}">{{minute}}</li>
          </ul>
        </div>

        <div class="picker-column">
          <ul class="wrap" :style="hEScrollTop">
            <li class="item" v-for="hour in hours" :key="hour" :class="{selected: hour === curH}">{{hour}}</li>
          </ul>
          <ul class="wrap" :style="mEScrollTop">
            <li class="item" v-for="minute in minutes" :key="minute" :class="{selected: minute === curM}">{{minute}}</li>
          </ul>
        </div>

        <div class="picker-mask"></div>
        <div class="picker-current"></div>
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
    },
    curTimeRange: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      TIME_HEADER_H: 50,
      ITEM_HEIGHT: 40,
      wrapHeight: '',
      curH: '',
      curM: '',
      scrollTop: '0',
      isTouching: false,
      touchStartY: 0,
      timer: null,
      scrollHeight: 0
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
    hSScrollTop: {
      get() {
        return {
          transform: `translate3d(0px, -${this.scrollHeight}px, 0px)`,
          'transition-duration': '200ms',
          'transition-property': 'all',
          '-webkit-transition-timing-function': 'cubic-bezier(0.23, 1, 0.68, 1)',
          'transition-timing-function': 'cubic-bezier(0.23, 1, 0.68, 1)'
        }
      },
      set(val) {
        return val;
      }
    },
    mSScrollTop() {
      return {
        transform: `translate3d(0px, -${this.curM * 40}px, 0px)`
      }
    },
    hEScrollTop() {
      return {
        transform: `translate3d(0px, -${this.curH * 40}px, 0px)`
      }
    },
    mEScrollTop() {
      return {
        transform: `translate3d(0px, -${this.curM * 40}px, 0px)`
      }
    }
  },
  watch: {
    isShow() {
      if (this.isShow) {
        setTimeout(() => {
          // 设置时间盘样式
          const popupHeight = this.$refs.popup.$el.offsetHeight;
          this.wrapHeight = (popupHeight - this.TIME_HEADER_H) + 'px';
        }, 0);
      }
    }
  },
  mounted() {
    // 获取当前时间
    this.getTime();
    // 显示时间
    this.formatTime();
  },
  methods: {
    // 获取当前时间
    getTime() {
      const date = new Date();
      const hour = date.getHours();
      this.scrollHeight = hour * this.ITEM_HEIGHT;
      this.curH = hour < 10 ? '0' + hour : hour;
      this.curM = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    },

    // 弹框时间处理
    formatTime() {
      console.log(this.selectedTimeRange);
    },

    handleTouchstart(event) {
      this.isTouching = true;
      this.touchStartY = event.touches[0].clientY || event.touches[0].pageY;
    },

    // 处理touch事件
    handleTouchmove(event) {
      if (!this.isTouching) {
        return null;
      }

      if (!this.timer) {
        this.timer = setTimeout(() => {
          // 滑动的高度
          const moveY = event.touches[0].clientY || event.touches[0].pageY;
          // 负数：往上；正数：往下
          let direction = moveY - this.touchStartY;
          // 如果滑动的距离大于一个item的高度的一半，直接跳到下个item
          if(Math.abs(direction) > this.ITEM_HEIGHT / 2 && Math.abs(direction) < this.ITEM_HEIGHT) {
            direction = direction < 0 ? -this.ITEM_HEIGHT : this.ITEM_HEIGHT;
          }
          // this.scrollHeight = direction < 0 ? -moveY : moveY;
          const index = direction < 0 ? Math.floor(direction / this.ITEM_HEIGHT) : Math.ceil(direction / this.ITEM_HEIGHT);
          this.curH = parseInt(this.curH - index);
          this.curH = this.curH >= 23 ? 23 : this.curH;
          this.curH = this.curH <= '00' ? '00' : this.curH < 10 ? '0' + this.curH : this.curH;
          this.scrollHeight = this.curH * this.ITEM_HEIGHT;
          this.timer = null;
        }, 300);
      }
    },

    handleTouchend() {
      this.isTouching = false;
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
.time-range {
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
  .picker-container {
    display: flex;
    position: relative;
  }
  .picker-column {
    display: flex;
    flex: 1;
    text-align: center;
    overflow: hidden;
  }
  .selected {
    font-weight: 600;
  }
  .wrap {
    flex: 1;
    margin-top: 88px;
    transition-duration: 0;
    transition-property: none;
    -webkit-transition-timing-function: cubic-bezier(0.23, 1, 0.68, 1);
    transition-timing-function: cubic-bezier(0.23, 1, 0.68, 1);
  }
  .picker-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image:
      -webkit-linear-gradient(
        top, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4)
      ),
      -webkit-linear-gradient(
        bottom, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4)
      );
    background-image:
      linear-gradient(
        180deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4)
      ), 
      linear-gradient(
        0deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4)
      );
    background-repeat: no-repeat;
    background-position: top, bottom;
    transform: translateZ(0);
    pointer-events: none;
    background-size: 100% 100px;
    z-index: 1;
  }
  .picker-current {
    position: absolute;
    top: 50%;
    right: 10px;
    left: 10px;
    height: 40px;
    z-index: 2;
    transform: translateY(-50%);
    pointer-events: none;
  }
  .picker-current:after {
    position: absolute;
    box-sizing: border-box;
    content: ' ';
    pointer-events: none;
    top: -50%;
    right: -50%;
    bottom: -50%;
    left: -50%;
    border-top: 1px solid #ebedf0;
    border-bottom: 1px solid #ebedf0;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }
  .item {
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    cursor: pointer;
  }
}
</style>