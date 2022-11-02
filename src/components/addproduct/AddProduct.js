import React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { TextField } from '@material-ui/core'
import Grid from "@material-ui/core/Grid";
import AppService from '../../service/AppService'
import { Alert, Snackbar } from '@mui/material';
import './AddProduct.css'
export default function AddProduct(props) {
    const [popupopen, setPopupopen] = React.useState(false);
    const [open, setOpen] = React.useState();
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [productName, setproductName] = useState('');
    const [contractSpend, setcontractSpend] = useState('');
    const [stakeholder, setstakeholder] = useState('');
    const [productDescription, setproductDescription] = useState('');
    const postData = () => {
        const fieldValues = {
            "productName": productName,
            "contractSpend": contractSpend,
            "stakeholder": stakeholder,
            "categoryLevel": [
                "string"
            ],
            "productDescription": productDescription,
        }
       // props.AddProduct(fieldValues)
        AppService.postProducts(fieldValues).then((data) => {
            setPopupopen(true)
           props.getData()
        }
        )
    }
    const handlePopup = () => {
        setOpen(false)
        setPopupopen(false)
    }
    return (
        <div>
            <Snackbar open={popupopen} autoHideDuration={2000} onClose={handlePopup}>
                <Alert onClose={handlePopup} severity="success" sx={{ width: '100%' }}>
                This is a success message!
                </Alert>
            </Snackbar>
            <div className='Addproduct-button'><Button size="small" onClick={handleOpen}>AddProduct</Button></div>
            <Modal
                open={open}
                onClose={handleClose}
            ><div onClick={handleClose} className='overlay'>
                    <div className='modalContainer'
                        onClick={(e) => {
                            e.stopPropagation();
                        }}>
                        <div className='modalRight'>
                            <p className='closeBtn' onClick={handleClose}>
                                X
                            </p>
                            <div className='content'>
                                <Grid className='heading'>
                                    <h3> Product Details</h3>
                                </Grid>
                                <Grid container spacing={1} >
                                    <Grid xs={12} item>
                                        <TextField label='AppName' placeholder='Enter the app name' value={productName} fullWidth required onChange={(e) => setproductName(e.target.value)} />
                                    </Grid>
                                    <Grid xs={12} item>
                                        <TextField label='contractSpend' placeholder='Enter the contractSpend' value={contractSpend} fullWidth required onChange={(e) => setcontractSpend(e.target.value)} />
                                    </Grid>
                                    <Grid xs={12} item>
                                        <TextField label='stakeholder' placeholder='Enter the stakeholder' value={stakeholder} fullWidth required onChange={(e) => setstakeholder(e.target.value)} />
                                    </Grid>
                                    <Grid xs={12} item>
                                        <TextField label='productDescription' placeholder='Enter the productDescription' value={productDescription} fullWidth required onChange={(e) => setproductDescription(e.target.value)} />
                                    </Grid>
                                    <Grid className='btnContainer'/*  xs={12} item */>
                                        <Button type="button" color='success' disabled={!productName || !contractSpend || !stakeholder || !productDescription} onClick={postData} className='btnPrimary' >
                                            <span className='bold'>OK</span>
                                        </Button>
                                        <Button type="button" color='error' className='btnOutline' onClick={handleClose}>
                                            <span className='bold'>Cancel</span>
                                        </Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

