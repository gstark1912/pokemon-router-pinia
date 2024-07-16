import { defineStore } from "pinia"
import { ref } from "vue"

export const useFavoriteStore = defineStore('favoritos', () => {
    const favoritos = ref([]);

    if(localStorage.getItem('favoritos'))
        favoritos.value = JSON.parse(localStorage.getItem('favoritos'));

    const saveFavorito = (poke) => {
        favoritos.value.push(poke);
        localStorage.setItem('favoritos', JSON.stringify(favoritos.value));
    }
    const removeFavorito = (id) => {
        favoritos.value = favoritos.value.filter(item => item.id != id);
        localStorage.setItem('favoritos', JSON.stringify(favoritos.value));
    }
    const getFavorito = (id) => favoritos.value.find(item => item.id == id);

    return {
        favoritos,
        saveFavorito,
        removeFavorito,
        getFavorito
    }
});
