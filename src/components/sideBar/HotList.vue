<template>
  <div>
    <dl class="fly-panel fly-list-one">
      <dt class="fly-panel-title">本周热议</dt>
      <dd v-for="(item, index) in lists" :key="'item' + index">
        <a href="##">{{item.title}}</a>
        <span><i class="iconfont icon-pinglun1"></i>{{ item.answer }}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
import { getTop } from '../../api/content'
export default {
  name: 'HotList',
  data () {
    return {
      lists: []
    }
  },
  mounted () {
    getTop().then((res) => {
      if (res.code === 200) {
        this.lists = res.data
      }
    })
  }
}
</script>

<style scoped>
</style>
