import {defineStore} from 'pinia';
import axios from 'axios';

export const useSizeStore = defineStore('sizeStore', {
    state: () => ({
        sizes: [],
        selectedSize: null,
        isLouding: false
    }),

    actions: {
        getSizes() {
            this.$state.isLouding = true
            axios.get('/api/products/sizes')
                .then(res => {
                    this.$state.sizes = res.data.data
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
