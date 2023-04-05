import React from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {FormControlLabel, Switch} from "@mui/material";
import {CATEGORY_DIALOG_MODES} from "../constants";

const CategoryDialog: React.FC<{
    open: boolean,
    formData: any
    onClose: () => void
    mod: CATEGORY_DIALOG_MODES | null
    onSave: (formData: any, mod: CATEGORY_DIALOG_MODES|null) => void
    onFormChange: (property: string, value: any) => void
}> = (props) => {
    return(
        <React.Fragment>
            <Dialog open={props.open} onClose={props.onClose} fullWidth maxWidth="sm">
                <DialogTitle>{props.mod === CATEGORY_DIALOG_MODES.CREATE ? "Create" : "Edit"} Category</DialogTitle>
                <DialogContent>
                    <DialogContentText>{props.mod === CATEGORY_DIALOG_MODES.CREATE ? "Create" : "Edit"} product categories by filling bellow information</DialogContentText>
                    <TextField
                        autoFocus
                        style={{marginTop: 19}}
                        margin="dense"
                        size="small"
                        id="categoryName"
                        label="Category Name"
                        type="text"
                        fullWidth
                        value={props.formData.categoryName.value}
                        required={props.formData.categoryName.isRequired}
                        error={!!props.formData.categoryName.error}
                        helperText={props.formData.categoryName.error}
                        onChange={(event) => props.onFormChange('categoryName', event.target.value)}
                    />
                    <TextField
                        autoFocus
                        style={{marginTop: 19}}
                        margin="dense"
                        size="small"
                        id="categoryNote"
                        label="Category Note"
                        type="text"
                        multiline
                        rows={3}
                        fullWidth
                        value={props.formData.categoryNote.value}
                        required={props.formData.categoryNote.isRequired}
                        error={!!props.formData.categoryNote.error}
                        helperText={props.formData.categoryNote.error}
                        onChange={(event) => props.onFormChange('categoryNote', event.target.value)}
                    />
                    <FormControlLabel
                        control={
                             <Switch
                                 defaultChecked
                                 value={props.formData.categoryStatus.value}
                                 onChange={(event) => props.onFormChange('categoryStatus', event.target.checked)}
                             />
                        }
                        label="Enable"
                        labelPlacement="start"
                        style={{marginLeft: 0}} />
                </DialogContent>
                <DialogActions>
                    <Button color="inherit" onClick={props.onClose}>Cancel</Button>
                    <Button color="success" onClick={() => props.onSave(props.formData, props.mod)}>Save</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}

export default CategoryDialog