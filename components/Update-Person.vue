<template>
    <h1 class="display-4 mb-4">Person Updaten</h1>
    <div class="card shadow-sm p-4">
        <form @submit.prevent="addPerson">
            <div class="row mb-4">
                <div class="col">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Firstname</label>
                        <input v-model="firstName" type="name" class="form-control" id="firstname"
                            aria-describedby="emailHelp">
                    </div>
                </div>
                <div class="col">
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Lastname</label>
                        <input v-model="lastName" type="name" class="form-control" id="exampleInputPassword1">
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Email</label>
                <input v-model="email" type="email" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Mobile</label>
                <input v-model="mobile" type="phone" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Adress</label>
                <input v-model="street" type="adress" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Gender</label>
                <input v-model="gender" type="name" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Stauts</label>
                <input v-model="stauts" type="adress" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Station</label>
                <input v-bind:value="station" type="adress" class="form-control" id="exampleInputPassword1">
            </div>
            <button type="submit" class="btn btn-primary">erstellen</button>
        </form>
        <button @click.prevent="addPerson" class="btn btn-primary">test</button>
    </div>
</template>

<script setup lang="ts">
import ctClient from "../store/churchToolsApi"
import Person from '~/types/Person';

let uniqid = Date.now();
const firstName = ref()
const lastName = ref()
const email = ref()
const mobile = ref()
const street = ref()
const gender = ref()
const stauts = ref()
const station = ref()

function addPerson() {
    // TODO
    // BUG? 
    // Wenn ich eine neue Person hinzufügen möchte bekomme ich einen 500 Error
    // Auch auf der Webseite beim Testen https://jobs.church.tools/api
    // SERVER ERROR 500 

    let person: Person = {
        id: uniqid,
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        mobile: mobile.value,
        street: street.value,
        sexId: gender.value,
        statusId: stauts.value,
        campusId: station.value,
    }

    let personData = JSON.stringify(person)
    console.log(person)

    ctClient.patch("/persons",
        {
            personData
        }).then((result) => {
            console.log(result)
        }).catch(err => {
            console.log(err)
        })
}

</script>