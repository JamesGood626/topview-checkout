import Vuex from "vuex";
import cart from "./modules/cart";
import products from "./modules/products";

const createStore = () => {
  return new Vuex.Store({
    modules: {
      cart,
      products
    },
    mutations: {
      updatePage(state, pageName) {
        state.page = pageName;
      }
    },
  });
};

export default createStore;

// Next step (2):
// Then, in our middleware, we’ll need a script that
// I’ve called pages.js. This will give us access to
// the route that’s changing and being updated before any of the
// other components, so it will be very efficient.
