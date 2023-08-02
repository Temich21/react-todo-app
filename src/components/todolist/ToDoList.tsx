import { toDoSlice } from "../../redux/reducers/ToDoSlice"
import { useAppDispatch, useAppSelector } from "../../redux/store"
import { Button, List, ListItem, ListItemSecondaryAction, Typography } from '@mui/material'
import { readableTimeConverter } from "../../utils/timeConverters"

export const ToDoList = () => {
    const toDoList = useAppSelector(state => state.toDoReducer)
    const { removeFromToDo } = toDoSlice.actions
    const dispatch = useAppDispatch()



    return (
        <section style={{ width: '550px' }}>
            <List>
                {toDoList.map(({ id, name, description, time }, index) => (
                    <ListItem key={id} >
                        <div style={{ maxWidth: '400px' }}>
                            <Typography variant="subtitle1">{`${name} | ${readableTimeConverter(time)}`}</Typography>
                            <Typography variant="body2" style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
                                {description}
                            </Typography>
                        </div>
                        <ListItemSecondaryAction>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => dispatch(removeFromToDo(index))}
                            >
                                Delete</Button>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
        </section>
    )
}