import React from 'react'
import { Formik, Form, Field } from "formik"
import Validations from "./Validations"
import {useTodo} from "../../../context/TodoContext"


function NewTodo() {

    const {addTodos} = useTodo()

    return (
        <Formik
            initialValues={{
                text: ""
            }}
            onSubmit={(values, bag) => {
                console.log(values)
                addTodos(values.text)
                bag.resetForm()
            }}
            validationSchema={Validations}
        >
            <Form>
                <Field className="new-todo" placeholder="What needs to be done?" autoFocus id="text" name="text" />
            </Form>
        </Formik>
    )
}

export default NewTodo
