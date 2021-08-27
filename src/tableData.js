import React, { Component } from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
const axios = require('axios').default;
const backendURL = "http://localhost:2022"

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [
                {headerName: "ID", field: "id"},
                {headerName: "Title", field: "title"},
                {headerName: "Start Time", field: "start"},
                {headerName: "End Time", field: "end"},
                {headerName: "Note", field: "note"},
            ],
            rowData: []
        }
    }

    componentDidMount() {
        axios.get(backendURL)
        .then(response => {
            this.setState({
                rowData: response.data.data.map(event => {return (
                    { id: event._id, title: event.title, start :event.startTime, end :event.endTime, note: event.note}
                )})
            })
        })
        .catch(error => { return error})
    }
    
    render() {
        return (
            <div className="ag-theme-balham" style={{ height: '500px', width: '600px' }} >
                <AgGridReact  
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.rowData}
                ></AgGridReact>
            </div>
        )
    }
}

export default Table