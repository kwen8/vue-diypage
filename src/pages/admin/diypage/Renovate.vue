<template>
    <div>
      <phone :data="componentsData"></phone>
      <diypage-set :data="componentsData"></diypage-set>
    </div>
</template>

<script>
import Phone from '@/components/renovate/Phone'
import DiypageSet from '@/components/renovate/DiypageSet'
import { mapGetters } from 'vuex'
import { registerComponents } from '@/utils/utils'
export default {
  data() {
    return {}
  },
  components: {
    Phone,
    DiypageSet
  },
  created() {
    const id = this.$route.query.id
    this.$store.dispatch('getDiypagesData', id)
  },
  methods: {
    getList() {
      return []
    }
  },
  computed: {
    ...mapGetters(['componentsData'])
  }
}
</script>

<style scoped>

</style>
