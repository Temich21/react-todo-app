import { Form } from "../../components/form/Form"
import { ToDoList } from "../../components/todolist/ToDoList"

export const Dashboard: React.FC = () => {
    return (
        <main style={{ marginLeft: '20px' }}>
            <h2>DashBoard</h2>
            <Form />
            <ToDoList />
        </main >
    )
}
