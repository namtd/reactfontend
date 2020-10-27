import React, { useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone'
import { Grid } from '@material-ui/core';
import XLSX from 'xlsx';
import { useDispatch, useSelector } from "react-redux";
import { listStaff } from "../../redux/actions/actStaff";
import EnhancedTable from '../common/EnhancedTable';

function CompListStaff(props) {
    const liststaff = useSelector(state => state.redStaff);
    const [jsondata, setJsondata] = useState([]);
    const dispatch = useDispatch();
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
                setJsondata(res);
            };
            reader.readAsArrayBuffer(file);
        })
    }, [])

    const { getInputProps, getRootProps } = useDropzone({ onDrop });
    useEffect(() => {
        if(liststaff !== jsondata){
            dispatch(listStaff(jsondata));
        }
      });
    return (
        <React.Fragment>
            <Grid container className="container">
                <Grid item xs={12} {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>
                </Grid>
                <Grid item xs={12}>
                    <h4>Files</h4>
                </Grid>
            </Grid>
            {liststaff.length > 0 ? <EnhancedTable jsonData={ liststaff }/> : "" }
        </React.Fragment>
    );
}

export default CompListStaff;