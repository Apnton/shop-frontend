import {defineStore} from 'pinia';
import axios from 'axios';

export const useColorStore = defineStore('colorStore', {
    state: () => ({
        colors: [],
        selectedColor: null,
        isLouding: false
    }),

    actions: {
        getColors() {
            this.$state.isLouding = true
            axios.get('/api/products/colors')
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
