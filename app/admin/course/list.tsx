import { Datagrid, List, TextField } from "react-admin";

export const CourseList = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="id"></TextField>
                <TextField source="title"></TextField>
                <TextField source="imageSrc"></TextField>
            </Datagrid>
        </List>
    )
}