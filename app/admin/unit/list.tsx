import { Datagrid, List, TextField, ReferenceField } from "react-admin";

export const UnitList = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="id"></TextField>
                <TextField source="title"></TextField>
                <TextField source="description"></TextField>
                <ReferenceField source="courseId" reference="courses" />
                <TextField source="source"></TextField>
            </Datagrid>
        </List>
    )
}