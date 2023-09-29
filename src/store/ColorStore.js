import {defineStore} from 'pinia';
import api from '@/api';

export const useColorStore = defineStore('colorStore', {
    state: () => ({
        colors: [],
        selectedColor: null,
        isLouding: false
    }),

    actions: {
        getColors() {
            this.$state.isLouding = true
            api.get('/api/products/colors')
                .then(res => {
                    this.$state.colors = res.data.data
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
