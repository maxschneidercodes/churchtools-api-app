<script setup lang="ts">
import Person from "../types/Person"

defineProps<{
    person: Person
}>()
</script>

<template>
    <div class="card m-4" style="width: 20rem;">
        <img class="card-img-top" :src="person.imageUrl" alt="person Image">
        <div class="card-body">
            <h5 class="card-title">{{ person.firstName }} {{ person.lastName }}</h5>
            <p class="card-text">{{ person.email }}</p>
            <NuxtLink class="btn btn-primary" :to="{
                path: '/' + person.id,
                query: {
                    id: person.id,
                }
            }">details</NuxtLink>
        </div>
    </div>
</template>

