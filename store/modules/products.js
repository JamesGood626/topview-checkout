const state = {
  list: [
    {
      id: 1,
      name: "Adult Male Bike",
      price: 20.47,
      image: "https://topview-assets.s3.amazonaws.com/adult_male_bike.png",
      product_type: "bike",
      inventory: 9
    },
    {
      id: 2,
      name: "Adult Female Bike",
      price: 20.47,
      image: "http://via.placeholder.com/250x250?text=Adult%20Female%20Bike",
      product_type: "bike",
      inventory: 12
    },
    {
      id: 3,
      name: "Kids Unisex Bike",
      price: 12.75,
      image: "https://topview-assets.s3.amazonaws.com/kids_unisex_bike.png",
      product_type: "bike",
      inventory: 17
    },
    {
      id: 4,
      name: "Adult Unisex Helmet",
      price: 7.99,
      image: "https://topview-assets.s3.amazonaws.com/daft_punk_helmet.png",
      product_type: "accessory",
      inventory: 12
    },
    {
      id: 5,
      name: "Kids Unisex Helmet",
      price: 3.49,
      image: "http://via.placeholder.com/250x250?text=Kids%20Unisex%20Helmet",
      product_type: "accessory",
      inventory: 20
    },
    {
      id: 6,
      name: "Insurance",
      price: 9.97,
      image: "http://via.placeholder.com/250x250?text=Insurance",
      product_type: "addon",
      inventory: Infinity
    }
  ]
};

// getters
const getters = {
  bikeList() {
    return state.list.filter(({ product_type }) => product_type === "bike");
  },
  accessoryList() {
    return state.list.filter(
      ({ product_type }) => product_type === "accessory"
    );
  },
  addonList() {
    return state.list.filter(({ product_type }) => product_type === "addon");
  }
};

// actions
const actions = {
  getAllProducts({ commit }) {
    shop.getProducts(products => {
      commit("setProducts", products);
    });
  }
};

// mutations
const mutations = {
  setProducts(state, products) {
    state.list = products;
  },

  incrementProductInventory(state, { id }) {
    const product = state.list.find(product => product.id === id);
    product.inventory++;
  },

  decrementProductInventory(state, { id }) {
    const product = state.list.find(product => product.id === id);
    product.inventory--;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
