<template>
    <div>
        <phone :data="componentsData"></phone>
    </div>
</template>

<script>
import Phone from "@/components/renovate/Phone";
import { mapGetters } from "vuex";
import { registerComponents } from "@/utils/utils";
export default {
  data() {
    return {};
  },
  components: {
    Phone
  },
  created() {
    const id = this.$route.query.id;
    this.$store.dispatch("getDiypagesData", id);
  },
  methods: {
    getList() {
      return [];
    }
  },
  computed: {
    ...mapGetters(["componentsData"])
  }
};
</script>

<style scoped>

</style>
