import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentUser: null,
        selectedCustomer: null,
        oldOrder: null,
        pickOrder: null,
        searchWord: null,
        detailProfile: null
    },
    mutations: {
        setCurrentUser(state, payload) {
            state.currentUser = payload
        },
        select(state, customer) {
            state.selectedCustomer = customer;
        },
        selectOld(state, Order) {
            state.oldOrder = Order;
        },

        pick(state, nameCustomer) {
            state.getCustomer = nameCustomer;
        },
        chooseOrder(state, get) {
            state.pickOrder = get;
        },
        word(state, collect) {
            state.searchWord = collect;
        },
        pdfDetail(state, detail) {
            state.detailProfile = detail
        }
    },
    getters: {
        customer: state => state.selectedCustomer,
        Order:  state => state.oldOrder,
        nameCustomer: state => state.getCustomer,
        get: state => state.pickOrder,
        collect: state => state.searchWord,
        detail: state => state.detailProfile
    },
    actions: {

    }
})