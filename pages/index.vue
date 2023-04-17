<template>
  <h1>Persons</h1>

  <div v-if="errorObjc.hasError">
    <p>{{ errorObjc.msg }}</p>
  </div>
  <div v-else>

    <div class="row">
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
import ctClient from "../store/churchToolsApi"
import paginationPersons from "../lib/pagination"

let allPersons: any = []
const showSpinner = ref(false)
const errorObjc = ref({ hasError: false, msg: "" })
const persons = ref()
const page = ref(1)

function fetchPersons() {
  showSpinner.value = true
  ctClient.get("/persons").then((data) => {
    allPersons = data
    persons.value = paginationPersons(page.value, allPersons)
    showSpinner.value = false
  }).catch(err => {
    errorObjc.value.msg = "Es ist ein fehler aufgetreten: " + err
    errorObjc.value.hasError = true
    showSpinner.value = false
  })
}

function next() {
  page.value++
  persons.value = paginationPersons(page.value, allPersons)
}

function previous() {
  if (page.value > 1) {
    page.value--
    persons.value = paginationPersons(page.value, allPersons)
  }
}

onMounted(() => {
  fetchPersons()
})
</script>