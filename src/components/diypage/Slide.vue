<template>
  <div class="slide">
    <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in params.data" :key="index">
            <img class="swipe-img" :src="item.url">
        </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe).use(SwipeItem);
export default {
  props: {
    params: Object
  }
};
</script>

<style lang="scss" scoped>
    .swipe-img {
        width: 100%;
    }
</style>
