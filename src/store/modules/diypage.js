export default {
  state: {
    data: {}
  },
  getters: {
    componentsData: state => {
      return state.data;
    }
  },
  mutations: {
    DIYPAGE_ADD_COMPONENT(state, data) {
      state.data.push(data);
    },
    DIYPAGE_DELETE_COMPONENT(state, index) {
      state.data.splice(index, 1);
    },
    STORE_PAGE_DATA(state, data) {
      state.data = data;
    }
  },
  actions: {
    saveCurrentPage() {},
    async getDiypagesData({ commit, dispatch }, id) {
      const list = await dispatch("getDiypageList");
      let data = list.filter(page => ~~page.id === ~~id);

      commit("STORE_PAGE_DATA", data[0]);
    },
    async getDiypageList() {
      const list = [
        {
          id: 1,
          name: "首页",
          author: "科大大",
          created_at: new Date().toLocaleString(),
          updated_at: new Date().toLocaleString(),
          data: [{ id: "slide" }]
        }
      ];
      return list;
    }
  }
};
