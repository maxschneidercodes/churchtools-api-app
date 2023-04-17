<template>
    <h1 class="display-4 mb-4">Person Updaten</h1>
    <div class="card shadow-sm p-4">
        <form @submit.prevent="updatePerson">
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
            <button type="submit" class="btn btn-primary">updaten</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import ctClient from "../store/churchToolsApi"
import Person from '~/types/Person';
const router = useRouter()

const props = defineProps<{
    person: Person,
}>();
const { person } = toRefs(props);

const id = ref(person.value.id)
const firstName = ref(person.value.firstName)
const lastName = ref(person.value.lastName)
const email = ref(person.value.email)
const mobile = ref(person.value.mobile)
const street = ref(person.value.street)
const gender = ref(person.value.sexId)
const stauts = ref(person.value.statusId)
const station = ref(person.value.campusId)

//TODO add Select sexID,statusID,campusID

function updatePerson() {
    ctClient.patch("/persons/" + id.value, {
        "firstName": firstName.value,
        "lastName": lastName.value,
        "email": email.value,
        "mobile": mobile.value,
        "street": street.value,
        "sexId": gender.value,
        "statusId": stauts.value,
        "campusId": station.value,
    }).then((result) => {
        if (result) {
            router.push("/")
        }
    }).catch(err => {
        console.log(err)
    })
}

</script>