<template>
  <div class="header">
    <slot name="left">
      <van-icon name="arrow-left" color="#1989fa" size="25" class="back-icon" @click="backIconClick"></van-icon>
    </slot>
    <h1>{{ title }}</h1>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    // 组件中事件直接传给父组件处理
    backIconClick() {
      this.$emit('backIconClick');
    }
  },
}
</script>

<style lang="scss">
.header {
  display: flex;
  position: relative;
  height: .9rem;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-shadow: 1px 0 2px 1px #ccc;
  text-align: center;
  
  .back-icon {
    position: absolute;
    left: .2rem;
  }

  h1 {
    font-size: .3rem;
    font-weight: 600;
  }

  .add-icon {
    position: absolute;
    right: .2rem;
    color: #1989fa;
    font-size: .6rem;
    font-weight: normal;
  }
}
</style>