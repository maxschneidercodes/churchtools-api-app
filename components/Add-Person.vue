<template>
    <h1 class="display-4 mb-4">Person Hinzufügen</h1>
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
    </div>
</template>

<script setup lang="ts">
import ctClient from "../lib/ctConnect"
import { Toast } from "~/types/Toast";
import showToast from "~/lib/toastWrapper";

const router = useRouter()
const firstName = ref()
const lastName = ref()
const email = ref()
const mobile = ref()
const street = ref()
const gender = ref()
const stauts = ref()
const station = ref()

function addPerson() {
    ctClient.post('/persons',
        {
            "firstName": firstName.value,
            "lastName": lastName.value,
            "email": email.value,
            "mobile": mobile.value,
            "campusId": station.value,
            "adress": street.value,
            "departmentIds": [1],
            "statusId": stauts.value,
            "privacyPolicyAgreement": { "typeId": 1, "whoId": 1 }
        }
    ).then((result) => {
        console.log(result)
        showToast(Toast.SUCCESS, "Erfolgreich Hinzugefügt")
        router.push({ path: '/', query: { fetch: 'true' } })
    }).catch(err => {
        console.log(err)
        showToast(Toast.ERROR, "Error: " + err)
    })
}

</script>