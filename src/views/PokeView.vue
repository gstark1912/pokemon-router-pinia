<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useGetData } from '../composables/getData.js'
import { useFavoriteStore } from '../store/favoritos.js'

const route = useRoute();
const router = useRouter();

const useFavorito  = useFavoriteStore();
const { saveFavorito, getFavorito } = useFavorito;

const back = ()=> {
    router.push('/pokemons');
}

const { data, getData, loading } = useGetData();
getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
</script>

<template>    
    <div v-if="data">
            <div class="card-body">
                <h5 class="card-title">{{ data.name }}</h5>
                <img :src="data?.sprites?.front_default" alt=""><div class="card"></div>
                <h6 class="card-subtitle mb-2 text-muted">Order: {{ data.order }}</h6>
                <p class="card-text">Base Experience: {{ data.base_experience }}</p>
                <p class="card-text">Height: {{ data.height }}</p>
                <p class="card-text">Weight: {{ data.weight }}</p>
                <div class="mt-3">
                    <h6>Stats:</h6>
                    <ul class="list-group">
                        <li v-for="stat in data.stats" class="list-group-item">
                            {{ stat.stat.name }}: {{ stat.base_stat }}
                        </li>
                    </ul>
                </div>
                <div class="mt-3">
                    <h6>Types:</h6>
                    <ul class="list-group">
                        <li v-for="type in data.types" class="list-group-item">
                            {{ type.type.name }}
                        </li>
                    </ul>
                </div>
            </div>
    <button class="btn btn-primary mb-2" :disabled="getFavorito(data.id)" @click="saveFavorito(data)">Agregar Favoritos</button>
    <button class="btn btn-primary mb-2" @click="back">Volver</button>
    </div>
    <h1 v-else>Not found</h1>
</template>