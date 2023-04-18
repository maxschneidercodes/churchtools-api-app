<template>
    <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-4">
            <h1 class="display-4 mb-4">Person Hinzufügen</h1>
            <div class="card shadow-sm p-4">
                <form @submit.prevent="addPerson">
                    <div class="row mb-4">
                        <div class="col">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Firstname</label>
                                <input v-model="firstName" type="name" class="form-control" id="firstname">
                            </div>
                        </div>
                        <div class="col">
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Lastname</label>
                                <input v-model="lastName" type="name" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Email</label>
                        <input v-model="email" type="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Mobile</label>
                        <input v-model="mobile" type="phone" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Adress</label>
                        <input v-model="street" type="adress" class="form-control">
                    </div>
                    <div class="mb-3">

                        <label for="exampleInputPassword1" class="form-label">Genders</label>
                        <select v-model="selectedGender" class="form-select">
                            <option v-for="option in genders" :value="option.id">
                                {{ option.name }}
                            </option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Stauts</label>
                        <select v-model="selectedStatus" class="form-select">
                            <label for="exampleInputPassword1" class="form-label">Statuse</label>
                            <option v-for="option in status" :value="option.id">
                                {{ option.name }}
                            </option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Station</label>
                        <select v-model="selectedStation" class="form-select">
                            <label for="exampleInputPassword1" class="form-label">Genders</label>
                            <option v-for="option in station" :value="option.id">
                                {{ option.name }}
                            </option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary">erstellen</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import ctClient from "../lib/ctConnect"
import { Toast } from "~/types/Toast";
import showToast from "~/lib/toastWrapper";
import { getGenderFields, getStatusFields, getStationFields } from "../lib/ctFields"

const router = useRouter()
const firstName = ref()
const lastName = ref()
const email = ref()
const mobile = ref()
const street = ref()
const selectedGender = ref()
const genders = ref()
const selectedStatus = ref()
const status = ref()
const selectedStation = ref()
const station = ref()

function addPerson() {
    ctClient.post('/persons',
        {
            "firstName": firstName.value,
            "lastName": lastName.value,
            "email": email.value,
            "mobile": mobile.value,
            "campusId": selectedStation.value,
            "street": street.value,
            "sexId": selectedGender.value,
            "departmentIds": [1],
            "statusId": selectedStatus.value,
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

onMounted(async () => {
    genders.value = await getGenderFields()
    status.value = await getStatusFields()
    station.value = await getStationFields()
})
</script>