import Person from "~/types/Person";

function paginationPersons(page: Number, persons: Person[]) {
    let newPersonsArray = persons.slice((Number(page) - 1) * 4, Number(page) * 4)
    return newPersonsArray
}

export default paginationPersons