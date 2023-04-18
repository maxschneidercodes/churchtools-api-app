import ctClient from "./ctConnect"
import { Toast } from "~/types/Toast"
import showToast from "./toastWrapper"

let fieldsData: any = []

function hasFieldsData() {
    if (fieldsData.length > 0) {
        return true
    } else {
        return false
    }
}

async function fetchFieldsData() {
    let data = await ctClient.get("/fields")
    console.log("asdasd")
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

export async function getGenderFor(person: any) {
    let data = await getFieldsData()
    let filteredData = data.filter((item: any) => item.key === "sexId")
    let options = filteredData[0].options
    let filterData = options.filter((item: any) => item.id == person.value.sexId)
    return filterData[0].name
}

export async function getStatusFor(person: any) {
    let data = await getFieldsData()
    let filteredData = data.filter((item: any) => item.key === "statusId")
    let options = filteredData[0].options
    let filterData = options.filter((item: any) => item.id == person.value.statusId)
    return filterData[0].name
}

export async function getStationFor(person: any) {
    let data = await getFieldsData()
    let filteredData = data.filter((item: any) => item.key === "campusId")
    let options = filteredData[0].options
    let filterData = options.filter((item: any) => item.id == person.value.campusId)
    return filterData[0].name
}