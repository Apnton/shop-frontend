import { defineStore } from 'pinia';
import api from '@/api';

export const useProductStore = defineStore('productStore', {
    state: () => ({
        products: [],
        product: {},
        group: [],
        isLouding: false
    }),

    actions: {
        getProducts() {
            api.get('/api/products')
                .then(res => {
                    this.$state.products = res.data.data.items
                }).catch(err => {
                console.log(err);
            })
        },

        getProductsWithParams(params) {
            api.get('/api/products', {params: params})
                .then(res => {
                    this.$state.products = res.data.data.items
                }).catch(err => {
                console.log(err);
            })
        },

        getProductBySlug(slug) {
            api.get(`/api/products/show/${slug}`)
                .then(res => {
                    this.$state.product = res.data.data.product
                    this.$state.group = res.data.data.group
                }).catch(err => {
                console.log(err);
            })
        },


    }


})
