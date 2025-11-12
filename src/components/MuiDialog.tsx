import React from "react";
import { useState } from "react";
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContentText,
    TextField,
    DialogActions, 
    DialogContent } from '@mui/material';

interface Props {
    title: string;
    textDialogDescription: string;
    textUserAction: string;
    textDialogTagLine: string;
}

export default function MuiDialog({title, textDialogDescription, textUserAction, textDialogTagLine}: Props) {
    // set this to true initially to prompt the user when the page loads
    const [open, setOpen] = useState(false);

    /*
    I'm going to need this soon (from https://mui.com/material-ui/react-dialog/)
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries((formData as any).entries());
        const email = formJson.email;
        console.log(email);
        handleClose();
    };
    */

    return (
        <>
            <Button onClick={() => setOpen(true)}>Open dialog</Button>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby='dialog-title'
                aria-describedby='dialog-description'>
                <DialogTitle id='dialog-title'
            >
                {title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id='content-description'>
                        {textDialogDescription}
                    </DialogContentText>
                    <DialogContentText id='content-user-action'>
                        {textUserAction}
                    </DialogContentText>
                    <DialogContentText id='content-tag-line'>
                        {textDialogTagLine}
                    </DialogContentText>
                    <TextField />
                </DialogContent>
                <DialogActions>
                    <Button>Submit</Button>
                    <Button
                        onClick={() => setOpen(false)}
                        autoFocus
                    >
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}