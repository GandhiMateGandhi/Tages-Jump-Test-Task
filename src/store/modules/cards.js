// import items from '../items'

const state = {
    count: 1,
    items: [
        {
            id: '1',
            name: 'Ручка дверная',
            code: 'L422WH',
            price: {
                old_price: 400,
                current_price: 355
            },
            image: {
                src: require('../../img/door-handle.jpg')
            },
            material: 1
        },
        {
            id: '2',
            name: 'Ручка, нержавеющ сталь',
            code: 'L423WH',
            price: {
                old_price: 400.9,
                current_price: 355.555
            },
            image: {
                src: require('../../img/steel-handle.jpg')
            },
            material: 2
        },
        {
            id: '3',
            name: 'Стандартные петли',
            code: 'P424WN',
            price: {
                old_price: null,
                current_price: 75
            },
            image: {
                src: require('../../img/standart-hinge.jpg')
            },
            material: 2
        },
        {
            id: '4',
            name: 'Петля со стопором',
            code: 'PW5AC',
            price: {
                old_price: 270,
                current_price: 200
            },
            image: {
                src: require('../../img/stopper-hinge.jpg')
            },
            material: 2
        },
        {
            id: '5',
            name: 'Ручка дверная',
            code: 'LM352',
            price: {
                old_price: null,
                current_price: 720
            },
            image: {
                src: require('../../img/door-handle.jpg')
            },
            material: 1
        },
        {
            id: '6',
            name: 'Ручка, нержавеющ сталь',
            code: null,
            price: {
                old_price: null,
                current_price: 355.555
            },
            image: {
                src: require('../../img/steel-handle.jpg')
            },
            material: 2
        },
        {
            id: '7',
            name: 'Стандартные петли',
            code: 'WD14LK',
            price: {
                old_price: null,
                current_price: 75
            },
            image: {
                src: require('../../img/standart-hinge.jpg')
            },
            material: 2
        },
        {
            id: '8',
            name: 'Петля со стопором',
            code: null,
            price: {
                old_price: 1200,
                current_price: 900
            },
            image: {
                src: require('../../img/stopper-hinge.jpg')
            },
            material: 2
        }
    ],
    filterOptions: [
        {
            id: 1,
            label: "Дерево"
        },
        {
            id: 2,
            label: "Металл"
        }
    ],
    sortingOptions: [
        {
            id: 1,
            label: "По возрастанию"
        },
        {
            id: 2,
            label: "По убыванию"
        }
    ]
};

const getters = {
    allItems: state => state.items,
    sortingOptions: state => state.sortingOptions,
    filterOptions: state => state.filterOptions
};

const actions = {
    sortByPrice({ commit }, event) {
        let response = (a, b) => {
            return a.price.current_price - b.price.current_price
        };
        if (event !== null) {
            if (event.id === 1) {
                state.items.sort((ascending, descending) => {
                    return response(ascending, descending)
                });
            } else if (event.id === 2) {
                state.items.sort((ascending, descending) => {
                    return response(descending, ascending)
                });
            }
        }


        commit('filteredByPrice', state.items);
        return response;
    },

    loadItems({ commit }, event) {
        const response = state.items.filter(todo => {
            if (todo.material === event.id) {
                return todo;
            }
        });
        commit('filteredByMaterial', response);
        return response;
    },
    setArray() {
        const setLocalStorage = (localStorageKey, property, items) => {
            if (localStorage.getItem(localStorageKey) === null) {
                const localStorageArray = items.map((item, index) => {
                    return { id: index, [property]: false }
                });
                localStorage.setItem(localStorageKey, JSON.stringify(localStorageArray));
            }
        }

        setLocalStorage("favorites", "isFavorite", state.items);
        setLocalStorage("cartItems", "isAddedToCart", state.items);

        state.items.forEach((item, index) => item.isFavorite = JSON.parse(localStorage.getItem("favorites"))[index].isFavorite);
        state.items.forEach((item, index) => item.isAddedToCart = JSON.parse(localStorage.getItem("cartItems"))[index].isAddedToCart);
    },

    addToFavorite({ commit, state }, itemId) {
        const response = state.items.map((item, index) => {
            if (+itemId === index + 1) {
                item.isFavorite = !item.isFavorite;
                addToLocalStorage('favorites', 'isFavorite', itemId);
            }
            return item;
        })
        commit('addedToFavorite', response);
        return response;
    },
    addToCart({ commit, state }, itemId) {
        const response = state.items.map((item, index) => {
            if (+itemId === index + 1) {
                item.isAddedToCart = !item.isAddedToCart;
                addToLocalStorage('cartItems', 'isAddedToCart', itemId);
            }
            return item;
        })
        commit('addedToCart', response);
        return response;
    }
};

const mutations = {
    filteredByMaterial: (state, items) => {
        state.items = items;
    },
    addedToFavorite: (state, items) => {
        state.items = items
    },
    addedToCart: (state, items) => {
        state.items = items
    },
    filteredByPrice: (state, items) => {
        state.items = items
    },
};

const addToLocalStorage = (localStorageKey, property, itemId) => {
    let localStorageItems = JSON.parse(localStorage.getItem(localStorageKey));
    localStorageItems = localStorageItems.map((item, index) => {
        if (+itemId === index + 1) {
            item[property] = !item[property];
        }
        return item;
    })
    localStorage.setItem(localStorageKey, JSON.stringify(localStorageItems));
}

export default {
    state,
    getters,
    actions,
    mutations
};