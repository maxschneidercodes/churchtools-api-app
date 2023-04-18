import ctClient from "./ctConnect"
import { Toast } from "~/types/Toast"
import showToast from "./toastWrapper"
import { FieldTypes } from "~/types/Field"

let fieldsData: any = []

function hasFieldsData() {
    if (fieldsData.length > 0) {
        return true
    } else {
        return false
    }
}

async function fetchFieldsData() {
    let data;
    try {
        data = await ctClient.get("/fields")
    } catch (err) {
        data = []
        showToast(Toast.ERROR, "Ein Fehler ist aufgetreten: " + err)
    }
    return data
}

async function getFieldsData() {
    if (hasFieldsData()) {
        return fieldsData
    } else {
        let data = await fetchFieldsData()
        return data as []
    }
}


export async function getGenderFields() {
    let data = await getFieldsData()
    let filteredData = data.filter((item: any) => item.key === FieldTypes.SEX_ID)
    return filteredData[0].options
}

export async function getStatusFields() {
    let data = await getFieldsData()
    let filteredData = data.filter((item: any) => item.key === FieldTypes.STATUS_ID)
    return filteredData[0].options
}

export async function getStationFields() {
    let data = await getFieldsData()
    let filteredData = data.filter((item: any) => item.key === FieldTypes.CAMPUS_ID)
    return filteredData[0].options
}

export async function getGenderFor(person: any) {
    let data = await getFieldsData()
    let filteredData = data.filter((item: any) => item.key === FieldTypes.SEX_ID)
    let options = filteredData[0].options
    let filterData = options.filter((item: any) => item.id == person.value.sexId)
    return filterData[0].name
}

export async function getStatusFor(person: any) {
    let data = await getFieldsData()
    let filteredData = data.filter((item: any) => item.key === FieldTypes.STATUS_ID)
    let options = filteredData[0].options
    let filterData = options.filter((item: any) => item.id == person.value.statusId)
    return filterData[0].name
}

export async function getStationFor(person: any) {
    let data = await getFieldsData()
    let filteredData = data.filter((item: any) => item.key === FieldTypes.CAMPUS_ID)
    let options = filteredData[0].options
    let filterData = options.filter((item: any) => item.id == person.value.campusId)
    return filterData[0].name
}