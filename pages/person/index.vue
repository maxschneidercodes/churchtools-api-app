<template>
    <PersonDetail :person="person" />
</template>

<script setup lang="ts">
import Person from '~/types/Person';

const route = useRoute()

const person: Person = {
    firstName: String(route.query.firstName),
    lastName: String(route.query.lastName),
    id: Number(route.query.id),
    email: String(route.query.email),
    imageUrl: String(route.query.imageUrl),
    street: String(route.query.street),
    mobile: String(route.query.mobile),
    sexId: Number(route.query.sexId),
    statusId: Number(route.query.statusId),
    campusId: Number(route.query.campusId)
}

</script>
