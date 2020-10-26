import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone'
import { Grid } from '@material-ui/core';
import XLSX from 'xlsx';

import EnhancedTable from '../common/EnhancedTable';

function CompListStaff() {

    const [jsonData, setJsonData] = useState();

    // useEffect(() => {
    //     console.log('use react hook !');
    // },[initState])

    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach(file => {
            const reader = new FileReader();
            reader.onerror = () => {
                console.log('Error is found as file is read')
            };

            reader.onload = () => {
                const binaryContent = reader.result;
                // Getting data from excel file
                const workBook = XLSX.read(binaryContent, { type: 'buffer' })
                const workSheetName = workBook.SheetNames[0];
                const workSheetData = workBook.Sheets[workSheetName];
                // Convert text in sheet to json data
                const res = XLSX.utils.sheet_to_json(workSheetData, { header: 1 });
                setJsonData(res)
                console.log(res);
            };
            reader.readAsArrayBuffer(file);
        })
    }, [])

    const { getInputProps, getRootProps } = useDropzone({ onDrop });
    
    return (
        <React.Fragment>
            <Grid container className="container">
                <Grid item xs={12} {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInpu tProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>
                </Grid>
                <Grid item xs={12}>
                    <h4>Files</h4>
                </Grid>
            </Grid>
            <EnhancedTable jsonData={ jsonData }/>
        </React.Fragment>
    );
}

export default CompListStaff;