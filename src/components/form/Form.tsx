import { toDoSlice } from "../../redux/reducers/ToDoSlice"
import { useAppDispatch } from "../../redux/store"
import { useFormik } from "formik"
import * as Yup from 'yup'
import { IToDo } from "../../models/IToDo"
import { FormControl, Input, FormHelperText, Button, TextField } from '@mui/material'
import { unixTimeStampConverter } from "../../utils/timeConverters"

export const Form = () => {
    const { addToDo } = toDoSlice.actions
    const dispatch = useAppDispatch()

    const submit = (values: IToDo) => {
        dispatch(addToDo({
            id: Number(new Date),
            name: values.name,
            description: values.description,
            time: unixTimeStampConverter(values.time)
        }))
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            time: ''
        },
        onSubmit: (values) => {
            submit(values)
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("Required"),
            description: Yup.string()
                .required("Required"),
            time: Yup.string()
                .required("Required")
        }),
    })

    return (
        <FormControl
            component="form"
            onSubmit={formik.handleSubmit}>
            <Input
                name='name'
                type='text'
                value={formik.values.name}
                onChange={formik.handleChange}
                placeholder='To Do name'
            />
            {
                formik.touched.name
                && formik.errors.name
                && <FormHelperText style={{ color: 'red' }}>{formik.errors.name}</FormHelperText>
            }
            <TextField
                name='description'
                value={formik.values.description}
                multiline
                rows={2}
                variant="outlined"
                onChange={formik.handleChange}
                placeholder='To Do description'
                style={{ width: '400px' }}
            />
            {
                formik.touched.description
                && formik.errors.description
                && <FormHelperText style={{ color: 'red' }}>{formik.errors.description}</FormHelperText>
            }
            <Input
                name='time'
                value={formik.values.time}
                onChange={formik.handleChange}
                type='datetime-local'
            />
            {
                formik.touched.time
                && formik.errors.time
                && <FormHelperText style={{ color: 'red' }}>{formik.errors.time}</FormHelperText>
            }
            <Button type="submit" variant="contained" color="primary">Add to To Do list</Button>
        </FormControl>


    )
}