import { Datagrid, List, TextField, ReferenceField, NumberField } from "react-admin";

export const LessonList = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="id"></TextField>
                <TextField source="title"></TextField>
                <ReferenceField source="unitId" reference="units" />
                <NumberField source="order" />
            </Datagrid>
        </List>
    )
}