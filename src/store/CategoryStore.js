import { defineStore } from 'pinia';
import api from '@/api';

export const useCategoryStore = defineStore('categoryStore', {
    state: () => ({
        categories: [],
        category: {},
        isLouding: false
    }),

    actions: {
        getCategories() {
            // this.$state.isLouding = true
            api.get('/api/products/categories')
                .then(res => {
                    this.$state.categories = res.data.data
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => {
                    // this.$state.isLouding = false
                })
        },

        getCategoryBySlug(slug) {
            this.$state.isLouding = true
            api.get(`/api/products/categories/${slug}`)
                .then(res => {
                    this.$state.category = res.data.data
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => {
                    this.$state.isLouding = false
                })

        }
    }
})
