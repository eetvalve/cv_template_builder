import Vue from 'vue';
import Vuex from 'vuex';

import timelineDataModule from './modules/timelineData';
import personalDataModule from './modules/personalData';
import cvDataState from './modules/cvData';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cvData: cvDataState
  },
});
