<template>
  <div class="tabs">
    <van-tabs
      v-model="activeName"
      animated>
      <van-tab
        v-for="tab in tabs"
        :key="tab.name"
        :title="tab.title"
        :name="tab.name"
        :to="tab.to">
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  data() {
    return {
      tabs: [
        {
          index: 0,
          name: 'projectTab',
          title: '项目工作',
          to: 'project'
        },
        {
          index: 1,
          name: 'changeTab',
          title: '变更工作',
          to: 'change'
        },
        {
          index: 2,
          name: 'taskTab',
          title: '任务工作',
          to: 'task'
        },
        {
          index: 3,
          name: 'otherTab',
          title: '其他工作',
          to: 'other'
        },
      ],
      activeName: 'projectTab'
    }
  },
  methods: {
  },
}
</script>

<style>
.van-tabs__nav {
  background-color: transparent;
}
</style>