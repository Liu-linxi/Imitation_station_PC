import { defineStore } from "pinia";;


const useLoginStore = defineStore("login", {
  state: () => ({
    token: "",
    userInfo: {},
  }),
  actions: {
    async accountLoginAction(account) {
      // 1.保存在cache中
      localStorage.setItem("LOGIN_TOKEN", "ceshi1baocun1token");
      // 跳转到首页
      // router.push("/main");
    },
    loadLocalDataAction() {
      this.token = localStorage.getItem("LOGIN_TOKEN");
    },
  },
});

export default useLoginStore;
