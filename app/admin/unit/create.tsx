import { SimpleForm, Create, TextInput, ReferenceInput, required, NumberInput } from "react-admin";

export const UnitCreate = () => {
    return (
        <Create>
            <SimpleForm>
                <TextInput source="title" validate={[required()]} label="Title" />
                <TextInput source="description" validate={[required()]} label="Description" />
                <ReferenceInput source="courseId" reference="courses" />
                <NumberInput source="courseId" validate={[required()]} label="order" />
            </SimpleForm>
        </Create >
    )
}