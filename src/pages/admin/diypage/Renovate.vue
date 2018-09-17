<template>
  <div class="renovate">
    <div class="renovate-area">
      <phone :data="componentsData"></phone>
      <diypage-set :data="componentsData"></diypage-set>
    </div>
  </div>
</template>

<script>
import Phone from '@/components/renovate/Phone';
import DiypageSet from '@/components/renovate/DiypageSet';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {};
  },
  components: {
    Phone,
    DiypageSet
  },
  created() {
    const id = this.$route.query.id;
    this.$store.dispatch('getDiypagesData', id);
  },
  methods: {
    getList() {
      return [];
    }
  },
  computed: {
    ...mapGetters(['componentsData'])
  }
};
</script>

<style lang="scss">
.renovate {
  display: flex;
  justify-content: center;
  &-area {
    display: flex;
    height: 100%;
  }
}
</style>
