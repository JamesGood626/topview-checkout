// See example getters, actions, and mutations here:
// https://github.com/vuejs/vuex/blob/dev/examples/shopping-cart/store/modules/cart.js
const state = {
  items: [],
  checkoutStatus: null
};

// getters
const getters = {
  cartList() {
    return [...state.items]
  },

  cartProducts: (state, getters, rootState) => {
    return state.items.map(({ id, quantity }) => {
      const product = rootState.products.list.find(product => product.id === id);
      return {
        title: product.title,
        price: product.price,
        quantity
      };
    });
  },

  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  }
};

// actions
const actions = {
  checkout({ commit, state }, products) {
    const savedCartItems = [...state.items];
    commit("setCheckoutStatus", null);
    // empty cart
    commit("setCartItems", { items: [] });
    shop.buyProducts(
      products,
      () => commit("setCheckoutStatus", "successful"),
      () => {
        commit("setCheckoutStatus", "failed");
        // rollback to the cart saved before sending the request
        commit("setCartItems", { items: savedCartItems });
      }
    );
  },

  addProductToCart({ state, commit }, product) {
    // commit("setCheckoutStatus", null);
    console.log("adding product: ", product)
    if (product.inventory > 0) {
      const cartItem = state.items.find(item => item.id === product.id);
      if (!cartItem) {
        commit(
          "pushProductToCart",{
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            product_type: product.product_type
          }
        );
      } else {
        commit("incrementItemQuantity", cartItem);
      }
      // remove 1 item from stock
      commit(
        "products/decrementProductInventory",
        { id: product.id },
        { root: true }
      );
    }
  },

  incrementCartProductQuantity({ state, commit }, product) {
    const cartItem = state.items.find(item => item.id === product.id);
    if(cartItem) {
      commit("incrementItemQuantity", cartItem)
      // remove 1 item from stock
      commit(
        "products/decrementProductInventory",
        { id: product.id },
        { root: true }
      );
    }
  },

  decrementCartProductQuantity({state, commit}, product) {
    const cartItem = state.items.find(item => item.id === product.id);
    if(cartItem.quantity >= 2) {
      commit("decrementItemQuantity", cartItem)
      commit(
        "products/incrementProductInventory",
        { id: product.id },
        { root: true }
      );
    } else {
      commit("removeProductFromCart", cartItem)
      commit(
        "products/incrementProductInventory",
        { id: product.id },
        { root: true }
      );
    }
  }
};

// mutations
const mutations = {
  pushProductToCart(state, product) {
    state.items = [...state.items, {...product, quantity: 1}]
  },

  removeProductFromCart(state, { id }) {
    state.items = state.items.filter(item => item.id !== id)
  },

  incrementItemQuantity(state, { id }) {
    const cartItem = state.items.find(item => item.id === id);
    cartItem.quantity++;
  },

  decrementItemQuantity(state, { id }) {
    const cartItem = state.items.find(item => item.id === id);
    if(cartItem.quantity >= 1) {
      cartItem.quantity--;
    }
  },

  // TODO: could be used to setItems from localStorage to the vuex cart state.
  // if going the extra mile...
  setCartItems(state, { items }) {
    state.items = items;
  },

  setCheckoutStatus(state, status) {
    state.checkoutStatus = status;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
