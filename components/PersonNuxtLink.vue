<script setup lang="ts">
import Person from '~/types/Person';
defineProps<{
    person: Person
    text: string
    linkTo: string
}>()
</script>

<template>
    <NuxtLink class="btn btn-primary" :to="{
        path: linkTo + String(person.email),
        query: {
            id: person.id,
            sexId: person.sexId,
            statusId: person.statusId,
            campusId: person.campusId,
            firstName: person.firstName,
            lastName: person.lastName,
            email: person.email,
            imageUrl: person.imageUrl,
            mobile: person.mobile,
            street: person.street,
        }
    }">{{ text }}</NuxtLink>
</template>