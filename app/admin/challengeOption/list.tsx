import { Datagrid, List, TextField, ReferenceField, NumberField, BooleanField } from "react-admin";

export const ChallengeOptionList = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <NumberField source="id"></NumberField>
                <TextField source="text"></TextField>
                <BooleanField source="correct" />
                <ReferenceField source="challengeId" reference="challenges" />
                <TextField source="imageSrc" />
                <TextField source="audioSrc" />
            </Datagrid>
        </List>
    )
}