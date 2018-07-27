<template>
    <div>
        <Table :columns="columns" :data="pageData"></Table>
    </div>
</template>

<script>
export default {
  data() {
    return {
      pageData: [],
      columns: [
        {
          title: "页面名称",
          key: "name"
        },
        {
          title: "作者",
          key: "author"
        },
        {
          title: "创建时间",
          key: "created_at"
        },
        {
          title: "修改时间",
          key: "updated_at"
        },
        {
          title: "操作",
          key: "handle",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.$router.push({
                        name: "admin_renovate",
                        query: {
                          id: params.row.id
                        }
                      });
                    }
                  }
                },
                "编辑"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.remove(params.index);
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ]
    };
  },
  mounted() {
    this.$store.dispatch("getDiypageList").then(res => {
      console.log(res);
      this.pageData = res;
    });
  }
};
</script>

<style scoped>
</style>
