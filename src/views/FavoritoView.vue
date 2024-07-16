<script setup>
import { useFavoriteStore } from '../store/favoritos.js'
import { storeToRefs } from 'pinia';

const useFavorito  = useFavoriteStore();
const {removeFavorito} = useFavorito;
const { favoritos } = storeToRefs(useFavorito);
</script>

<template>
    <h1>Favoritos</h1>
    <p v-if="favoritos.length == 0">Sin favoritos</p>
    <ul class="list-group">
        <li class="list-group-item" v-for="f in favoritos" :key="f.id">
        {{ f.name }}        
        <router-link :to="`/pokemons/${f.name}`" class="btn btn-secondary">Ver más de {{ f.name }}</router-link>
        <button class="btn btn-danger" @click="removeFavorito(f.id)">Eliminar Favorito</button>
        </li>
    </ul>
    
</template>