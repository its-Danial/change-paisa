import Vue from "vue";
import Vuex from "vuex";
import EnglishLanguageText from "@/translations/en.json";
import UrduLanguageText from "@/translations/ur.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appLangText: EnglishLanguageText,
    appLang: "en",
  },
  getters: {},
  mutations: {
    toggleUrduLang(state) {
      state.appLangText = UrduLanguageText;
      state.appLang = "ur";
    },
    toggleEnglishLang(state) {
      state.appLangText = EnglishLanguageText;
      state.appLang = "en";
    },
  },
  actions: {},
  modules: {},
});
