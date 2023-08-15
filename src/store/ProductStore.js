import { defineStore } from 'pinia';
import axios from 'axios';

export const useProductStore = defineStore('productStore', {
    state: () => ({
        products: [],
        product: {},
        group: [],
        isLouding: false
    }),

    actions: {
        getProducts() {
            axios.get('/api/products', {
               params: {
                   // category_id: 1
               }
            })
                .then(res => {
                    this.$state.products = res.data.data.items
                }).catch(err => {
                console.log(err);
            })
        },

        getProductsWithParams(params) {
            axios.get('/api/products', {params: params})
                .then(res => {
                    this.$state.products = res.data.data.items
                }).catch(err => {
                console.log(err);
            })
        },

        getProductBySlug() {
            axios.get('/api/products/show')
                .then(res => {
                    this.$state.product = res.data.data.product
                    this.$state.group = res.data.data.group
                }).catch(err => {
                console.log(err);
            })
        },


    }


})
