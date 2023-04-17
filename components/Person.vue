<template>
    <div class="card m-4 shadow-lg" style="width: 20rem;">
        <div class="card-body">
            <h5 class="card-title">{{ person.firstName }} {{ person.lastName }}</h5>
            <p class="card-text">{{ person.email }}</p>
            <PersonNuxtLink linkTo="/" :person="person" text="details" />
        </div>
    </div>
</template>

<script setup lang="ts">
import Person from "../types/Person"

defineProps<{
    person: Person
}>()
</script>
