//TODO chwilowo porzucone

import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import axios from 'axios';
import {Field, Form, Formik} from 'formik';
import {SelectField} from './SelectField';
//TODO MaterialTable icon imports (można zastąpić linkując stylesheet w css)
import MaterialTable from 'material-table'

import {forwardRef} from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import AccountEventTypes from "./AccountEvents";
import {useParams} from "react-router-dom";

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref}/>),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref}/>),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref}/>),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref}/>),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref}/>),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref}/>),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref}/>),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref}/>),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref}/>),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref}/>),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref}/>),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref}/>),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref}/>)
};


const Analysis = () => {

    const {eventId} = useParams();

    /*const [events, setEvents] = useState([]);
    const [types, setTypes] = useState([]);
    const [users, setUsers] = useState([]);
    //const [eventsToConfirm, setEventsToConfirm] = useState([]);

    useEffect(() => {
        axios.get('/api/users').then((res) => setUsers(res.data));
        axios.get('/api/account-events/types').then((res) => setTypes(res.data));
        axios.get('/api/account-events').then((res) => setEvents(res.data));
        //axios.get('/api/account-events').then((res) => setEventsToConfirm(res.data));
        //axios.get('/api/account-events').then((res) => setEventsToConfirm(res.data));
        //axios.get('/api/account-events').then((res) => (res.filter(function (setEventsToConfirm){ return setEventsToConfirm.id = 1})));
    }, []);

    const typesColumns = [
        {title: "id", field: "id"},
        {title: "powtarzalny", field: "isRecurring"},
        {title: "updated data", field: "updatedAt"},
        {title: "created data", field: "createdAt"},
        {title: "nazwa", field: "name"},
    ]

    const columns = [
        {title: "ID", field: "id"},
        {title: "opis", field: "description"},
        //{ title: "data", field: "eventDate" },
        {title: "ilosc", field: "value"},
        {title: "zaakceptowane", field: "isAccepted"},
    ]

    const userColumns = [
        {title: "ID", field: "id"},
        {title: "imie", field: "firstName"},
        //{ title: "data", field: "eventDate" },
        {title: "nazwisko", field: "lastName"}
    ]

    const toConfirmColumns = [
        {title: "ID", field: "id"},
        {title: "opis", field: "description"},
        //{ title: "data", field: "eventDate" },
        {title: "ilosc", field: "value"},
        {title: "zaakceptuj", field: "isAccepted"},
        //{title: "AKCEPTUJ", actions}
    ]
    const mapUserValue = (user) => user.id;
    const mapUserLabel = (user) => user.firstName + ' ' + user.lastName;

    const mapTypeValue = (type) => type.id;
    const mapTypeLabel = (type) => type.name;


    return (
        <>
            <div>
                <p1>Analizy</p1>
                :
            </div>
            <div>
                <Form>
                    <label htmlFor="date">Data zdarzenia</label>
                    <Field type="date" id="date" name="date"/>

                    <label htmlFor="value">Wartość</label>
                    <Field type="number" id="value" name="value"/>

                    <label htmlFor="description">Opis</label>
                    <Field id="description" name="description" placeholder="test"/>

                    <label htmlFor="userId">Użytkownik</label>
                    <Field name={'userId'} component={SelectField} options={users} valueMap={mapUserValue}
                           labelMap={mapUserLabel}/>

                    <label htmlFor="accountEventTypeId">Typ zdarzenia</label>
                    <Field name={'accountEventTypeId'} component={SelectField} options={types} valueMap={mapTypeValue}
                           labelMap={mapTypeLabel}/>

                    <button type="submit">Dodaj</button>
                </Form>
            </div>
        </>
    )

     */

    return (
        <div>
            ANALIZY (potem naprawie teraz nie dziala)
            document.
        </div>
    )
}
export default Analysis;