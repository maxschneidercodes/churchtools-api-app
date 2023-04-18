
<template>
    <h1>Person Detail </h1>
    <div class="card p-4 shadow-lg">
        <div>
            <img class="rounded float-left" :src="person.imageUrl" alt="person Image">
            <h1 class="mt-2">{{ person.firstName }} {{ person.lastName }}</h1>
            <p> <strong>Email:</strong> {{ person.email }}</p>
            <p> <strong>Mobile:</strong> {{ person.mobile }}</p>
            <p> <strong>Adress:</strong> {{ person.street }}</p>
            <p> <strong>Gender:</strong> {{ gender }}</p>
            <p> <strong>Status: </strong> {{ status }}</p>
            <p> <strong>Station: </strong> {{ campus }}</p>
            <NuxtLink class="btn btn-primary" :to="{
                path: '/update', query: {
                    id: String(person.id), sexId: person.sexId, statusId:
                        person.statusId, campusId: person.campusId, firstName: person.firstName, lastName: person.lastName, email:
                        person.email, imageUrl: person.imageUrl, mobile: person.mobile, street: person.street,
                }
            }"> updaten </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import Person from "../types/Person"
import { getGenderFor, getStatusFor, getStationFor } from "../lib/ctFields"

const props = defineProps<{
    person: Person,
}>();
const { person } = toRefs(props);
const gender = ref()
const status = ref()
const campus = ref()

gender.value = await getGenderFor(person)
status.value = await getStatusFor(person)
campus.value = await getStationFor(person)
</script>

