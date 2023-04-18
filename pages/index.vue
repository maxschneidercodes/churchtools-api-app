<template>
  <h1>Persons</h1>
  <div v-if="errorObjc.hasError">
    <p>{{ errorObjc.msg }}</p>
  </div>
  <div v-else>
    <div class="row">
      <select @change="selectFilter" v-model="stautsFilter" class="form-select" aria-label="Default select example">
        <option value="0">Interessent</option>
        <option value="1">Freund</option>
        <option value="3">Mitglied</option>
        <option value="4">Löschen</option>
      </select>
      <div v-if="showSpinner">
        <Spinner />
      </div>
      <div class="col-md-auto" v-for="person in persons">
        <Person :person="person" />
      </div>
    </div>
    <div>
      <button class="btn btn-secondary m-4" @click="previous">zurück</button>
      <button class="btn btn-secondary mx-4" @click="next">nächste Seite</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import churchtoolsClient from "~/lib/ctConnect"
import ctLogin from "../lib/ctLogin"
import showToast from "~/lib/toastWrapper";
import { Toast } from "../types/Toast"
import { cachedPersons, setCachedPersons, cachedSelectState, setCachedSelectState } from "../store/cachedPersons"
const route = useRoute()
const router = useRouter()

const showSpinner = ref(false)
const errorObjc = ref({ hasError: false, msg: "" })
const persons = ref()
const page = ref(1)
const stautsFilter = ref(cachedSelectState)

function fetchPerson() {
  showSpinner.value = true
  churchtoolsClient.get(`/persons?page=${page.value}&limit=12&status_ids%5B%5D=${stautsFilter.value}&status_ids%5B%5D=${stautsFilter.value}`).then((data: any) => {
    persons.value = data
    setCachedPersons(data)
    showSpinner.value = false
    showToast(Toast.SUCCESS, "Personen Erfolgreich Gefetched.")
  }).catch(err => {
    errorObjc.value.msg = "Es ist ein fehler aufgetreten: " + err
    errorObjc.value.hasError = true
    showSpinner.value = false
    showToast(Toast.ERROR, "Fehler beim Fetchen der Personen: " + err)
  })
}

function getCachedPersons() {
  const fetchAgain = route.query.fetch
  if (cachedPersons.length > 0 && !fetchAgain) {
    persons.value = cachedPersons
    showToast(Toast.SUCCESS, "Personen Erfolgreich aus dem cache geladen.")
  } else {
    router.replace({ query: {} })
    fetchPerson()
  }
}

function selectFilter(event: any) {
  const filter = event.target.value
  stautsFilter.value = filter
  setCachedSelectState(filter)
  fetchPerson()
}

function next() {
  page.value++
  persons.value = fetchPerson()
}

function previous() {
  if (page.value > 1) {
    page.value--
    persons.value = fetchPerson()
  }
}

onMounted(() => {
  ctLogin(() => {
    getCachedPersons()
  })
})
</script>