// VALITDATIONS FOR FORM

import {object, string} from "yup"

const Validations = object({
    text: string().required()
})


export default Validations