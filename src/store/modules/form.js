import router from "../../router";
import request from "../../utils/request";

const state = {
  step: {
    payAccount: "123456"
  }
};

const actions = {
  async submitStepForm({ commit }, { payload }) {
    await request({
      url: "/api/from",
      method: "POST",
      data: payload
    });
    commit("saveStepFormData", payload);
    router.push("/form/step-from/result");
  }
};

const mutations = {
  saveStepFormData(state, { payload }) {
    state.step = {
      ...state.step,
      ...payload
    };
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
