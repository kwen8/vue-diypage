export default {
  state: {
    data: {}
  },
  getters: {
    componentsData: state => state.data
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
      const list = await dispatch('getDiypageList');
      const data = list.filter(page => parseInt(page.id, 0) === parseInt(id, 0));
      commit('STORE_PAGE_DATA', data[0]);
    },
    async getDiypageList() {
      const list = [
        {
          id: 1,
          name: '首页',
          author: '科大大',
          created_at: new Date().toLocaleString(),
          updated_at: new Date().toLocaleString(),
          data: [
            {
              id: 'slide',
              params: {
                data: [
                  {
                    url: 'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg'
                  },
                  {
                    url: 'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg'
                  }
                ]
              }
            }
          ]
        }
      ];
      return list;
    }
  }
};
