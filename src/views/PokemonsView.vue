<script setup>
import { RouterLink } from 'vue-router'
import { useGetData } from '../composables/getData.js'


const { data, getData, loading, errorData } = useGetData();
getData('https://pokeapi.co/api/v2/pokemon');

</script>

<template>

    <h1>Pokemons</h1>
    <p v-if="loading">Loading...</p>    
    <div v-if="data">
        <ul>
            <li v-for="pokemon in data.results">
                <router-link :to="`/pokemons/${pokemon.name}`">{{ pokemon.name }}</router-link>
            </li>
        </ul>
        <buttton 
        :disabled="!data.previous" 
        @click="getData(data.previous)" 
        class="btn btn-success me-2">
        Previous
    </buttton>
        <buttton v-if="data.next" @click="getData(data.next)" class="btn btn-primary">Next</buttton>    
    </div>
    <h2 class="alert alert-danger" v-if="errorData">{{ errorData  }}</h2>
</template>