<template>
    <div class="card m-4 shadow-lg" style="width: 20rem;">
        <div class="card-body">
            <h5 class="card-title">{{ person.firstName }} {{ person.lastName }}</h5>
            <p class="card-text">{{ person.email }}</p>
            <NuxtLink class="btn btn-primary" :to="{
                path: '/person', query: {
                    id: String(person.id), sexId: person.sexId, statusId:
                        person.statusId, campusId: person.campusId, firstName: person.firstName, lastName: person.lastName, email:
                        person.email, imageUrl: person.imageUrl, mobile: person.mobile, street: person.street,
                }
            }"> details </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import Person from "../types/Person"

defineProps<{
    person: Person
}>()
</script>
