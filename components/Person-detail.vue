<script setup lang="ts">
import ChurchToolsClient from "../store/churchToolsApi"
import Person from "../types/Person"

const props = defineProps<{
    person: Person,
}>();
const { person } = toRefs(props);
let fieldsData: any = []
const gender = ref()
const status = ref()
const errorObjc = ref({ hasError: false, msg: "" })

ChurchToolsClient.get("/fields").then((data) => {
    fieldsData = data
    console.log(fieldsData)
    gender.value = getGender()
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
    let filterData = options.filter((item: any) => item.id == person.value.sexId)
    return filterData[0].name
}
</script>

<template>
    <h1>Person Detail </h1>
    <div class="container">
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
        </div>
    </div>
</template>