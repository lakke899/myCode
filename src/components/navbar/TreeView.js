import { React, useState, useEffect } from 'react'
import AppService from '../../service/AppService';
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
//import PopOver from './PopOver'
export default function TreeView() {
    const [setInputArray] = useState([]);
    const folderIcon = <FolderIcon style={{ color: "Blue" }} />
    const insertDriveFileIcon = <InsertDriveFileIcon style={{ color: "rgb(202, 193, 19)" }} />
    useEffect(() => {
        AppService.getCatagories().then((data) => {
            setInputArray(data)
        })
    }, []);
    
    return (
        <div>
            {setInputArray}
        </div>
    )
}
