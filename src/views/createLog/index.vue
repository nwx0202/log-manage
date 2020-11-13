<template>
  <div class="create-log">
    <Header :title="title" @backIconClick="backToPrePage" />
    <Tab />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Tab from './components/Tab'
export default {
  name: 'Logs',
  components: {
    Header,
    Tab
  },
  data() {
    return {
      title: '新建日志'
    }
  },
  mounted() {
  },
  methods: {
    backToPrePage() {
      this.$router.push({name: 'Logs'});
    }
  },
}
</script>

<style lang="scss">
.create-log {
  .content {
    padding: .1rem .2rem;
  }
}
</style>