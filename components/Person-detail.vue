
<template>
    <h1>Person Detail </h1>
    <div class="card p-4 shadow-lg">
        <div v-if="errorObjc.hasError">
            <p>{{ errorObjc.msg }}</p>
        </div>
        <div v-else>
            <img class="" :src="person.imageUrl" alt="person Image">
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
import ctClient from "../lib/ctConnect"
import Person from "../types/Person"

const props = defineProps<{
    person: Person,
}>();
const { person } = toRefs(props);
let fieldsData: any = []
const gender = ref()
const status = ref()
const campus = ref()
const errorObjc = ref({ hasError: false, msg: "" })

ctClient.get("/fields").then((data) => {
    console.log(data)
    fieldsData = data
    gender.value = getGender()
    status.value = getStatus()
    campus.value = getStation()

}).catch(err => {
    errorObjc.value.msg = "Es ist ein fehler aufgetreten: " + err
    errorObjc.value.hasError = true
})

function getGender() {
    let data = fieldsData.filter((item: any) => item.key === "sexId")

    let options = data[0].options
    let filterData = options.filter((item: any) => item.id == person.value.sexId)
    return filterData[0].name
}

function getStatus() {
    let data = fieldsData.filter((item: any) => item.key === "statusId")
    let options = data[0].options
    let filterData = options.filter((item: any) => item.id == person.value.statusId)
    return filterData[0].name
}

function getStation() {
    let data = fieldsData.filter((item: any) => item.key === "campusId")
    let options = data[0].options
    let filterData = options.filter((item: any) => item.id == person.value.campusId)
    return filterData[0].name
}

</script>
