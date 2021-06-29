import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    testimoni: [],
    mediaSosial: []
  },
  mutations: {
    SET_TESTIMONI: (state, payload) => {
      state.testimoni = payload
    },
    SET_MEDIASOSIAL: (state, payload) => {
      state.mediaSosial = payload
    }
  },
  actions: {
    async fetchTestimoni({ commit }) {
      const API_URL = "https://fueremi-hasura.herokuapp.com/v1/graphql";
      const API_HEADERS = {
        "Content-Type": "application/json",
        "x-hasura-admin-secret": "18032405",
      };
      const API_QUERY = `
      query MyQuery {
        hhaq_testimoni(limit: 10) {
          id
          image
          name
          rating
          desc
        }
      }
      `;
      const data = await axios.post(
        API_URL,
        { query: API_QUERY },
        { headers: API_HEADERS }
      );

      commit('SET_TESTIMONI', data.data.data.hhaq_testimoni)
    },
    async fetchMediaSosial({ commit }) {
      const API_URL = "https://fueremi-hasura.herokuapp.com/v1/graphql";
      const API_HEADERS = {
        "Content-Type": "application/json",
        "x-hasura-admin-secret": "18032405",
      };
      const API_QUERY = `
      query MyQuery {
        hhaq_media_sosial {
          id
          image
          name
          url
          url_phone
          username
        }
      }
      `;
      const data = await axios.post(
        API_URL,
        { query: API_QUERY },
        { headers: API_HEADERS }
      );

      commit('SET_MEDIASOSIAL', data.data.data.hhaq_media_sosial)
    },
  },
});
