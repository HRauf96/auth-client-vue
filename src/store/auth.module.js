import { SIGNIN, SIGNOUT } from '@/store/actions.type';
import { SET_ERROR, SET_USER, UNSET_USER } from '@/store/mutations.type';

const nullUser = {
  Email: null
} 

const exampleUser = {
  Email: "john@smith.com"
}

const state = {
  error: null,
  user: nullUser
}

const actions = {
  [SIGNIN](context, payload) {
    console.log("Signing in...")
    var evenOdd = Math.floor(Math.random() * 100) % 2
    if (evenOdd == 0) {
      context.commit(SET_USER, payload)
      context.commit(SET_ERROR, null)
      console.log("Signed In.", payload.Email)
    } else {
      context.commit(SET_ERROR, "Can't sign in.")
      console.log("Cannot sign in.")
    }
  },
  [SIGNOUT](context) {
    console.log("Signing out...")
    context.commit(UNSET_USER)
    console.log("Signed Out.")
  }
}

const mutations = {
  [SET_USER](state, user) {
    state.user = user;
  },
  [UNSET_USER](state) {
    state.user = null
  },
  [SET_ERROR](state, error) {
    state.error = error
  }
}

export default {
  state,
  actions,
  mutations
};