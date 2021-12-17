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



//TODO posprzątać
//const rowIdTest = 1 //zmienna używana do zatwierdzania... albo i nie używana


const AccountEventTypes = () => {

    const [events, setEvents] = useState([]);
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





    const mapUserValue = (user) => user.id;
    const mapUserLabel = (user) => user.firstName + ' ' + user.lastName;

    const mapTypeValue = (type) => type.id;
    const mapTypeLabel = (type) => type.name;

    const addEvent = async (values, {resetForm}) =>
        axios.post('/api/account-events', values)
            .then(res => {
                resetForm();
                return setEvents([...events, res.data]);
            });

    //const confirmEvent = async (values, {resetForm}) =>
    /*const confirmEvent = async (values) =>
        axios.put('/api/account-events', values, console.log("hejkers z confirmEvent: values = " + values), console.table(values))
            .then(res => this.setState({ updatedAt: res.data.updatedAt

            }));
     */

    //DZIALA chyba troche :)
    /*const confirmEvent = async (values) =>
        axios.put('/api/account-events', values, values, console.log("hejkers z confirmEvent: values = " + values), console.table(values))
            .then(res => {
                console.table(values)
                //resetForm();
                return setEvents([...events, res.data]);
            });

     */
    const confirmEvent = async (values) =>
        axios.put('/api/account-events', values, values, console.log("hejkers z confirmEvent: values = " + values), console.table(values))
            .then(res => {try{
                console.table(values)
                //resetForm();
                return setEvents([...events, res.data]);
            }catch (err){
        console.log(err)}})





//TODO na pewno jest jeszcze zle
    /*const confirmEvent = async(values, {resetForm}) =>
        axios.put('/api/account-events' + rowIdTest, {values})
            .then(res => {
                console.log("ROW ID W rowIdTest to: " + rowIdTest)
                resetForm();
                return setEvents([...events, res.data]);
            });

     */
    /*
    const confirmEvent = async () =>
        axios.put('/api/account-events', {
        isAccepted: '1'
    });

     */
/*
    const confirmEvent = (newData, oldData, resolve) => {
        //if(errorList.length < 1){
            //axios.patch("/api/account-events"+newData.id, newData)
            axios.patch("/api/account-events", newData)
                .then(res => {
                    console.log("HANDLE KLIK????????????????????")
                    const dataUpdate = [...events.isAccepted = '1'];
                    const index = oldData.tableData.id;
                    dataUpdate[index] = newData;
                    setEvents([...dataUpdate]);
                    resolve()
                    //setIserror(false)
                    //setErrorMessages([])
                })

 */

        /*.catch(error => {
            setErrorMessages(["Update failed! Server error"])
            setIserror(true)
            resolve()
        })
}else{
    setErrorMessages(errorList)
    setIserror(true)
    resolve()
}

 */
        //}




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

    //TODO posprzątać
    //calculateEventDates (start date, finishDate, askForApproval
    //every x days: (everyXunits
    //every x units: (unitType, dayOfTheUnit
    console.log("calculateEventDates: ")
    const timestamp = JSON.parse(Date.now())
    //const timestampXD = Date.parse(timestamp)
    console.log( JSON.parse(timestamp))
    //console.log(timestampXD.toLocaleDateString)

    var eventsToConfirm = [];
    for(var key in events) {
        if((events[key].isAccepted === false) && Date.parse(events[key].date) < timestamp) {

            eventsToConfirm.push(events[key]);
        }else{console.log(Date.parse(events[key].date) + " nie wchodzi bo timestamp to: " + timestamp)}
    }
    console.table(eventsToConfirm)



    /*const confirmEvent = (newData, oldData, resolve) => {axios.patch("/api/account-events", newData)
        .then(res => {
            console.log("HANDLE KLIK????????????????????")
            const dataUpdate = [...events.isAccepted = '1'];
            const index = oldData.tableData.id;
            dataUpdate[index] = newData;
            setEvents([...dataUpdate]);
            resolve()
        })}

     */





    return (
        <>

            <div>
                <h1>Dodaj zdarzenie</h1>
                <Formik
                    initialValues={{
                        value: 0,
                        date: new Date(),
                        description: '',
                        userId: 0,
                        accountEventTypeId: 0,
                    }}

                    onSubmit={addEvent}
                >
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
                </Formik>
            </div>
            <div>



                <MaterialTable
                    title="Account Data waiting for confirmation"
                    data={eventsToConfirm}
                    columns={toConfirmColumns}

                    //onClick = {confirmEvent}
                    //rowData = {eventsToConfirm}
                    actions={[
                        {
                            icon: tableIcons.Check,
                            tooltip: "Confirm event",

                            //onClick: ({rowIdTest = rowData.tableData.id, onSubmit=confirmEvent}, rowData) => alert("You want to confirm " + rowData.tableData.id ),
                            //onClick: (rowIdTest = confirmEvent(eventsToConfirm.tableData.id), eventsToConfirm) => confirmEvent()
                            onClick: (event, rowData) => confirmEvent(rowData)



                            /*    console.log("hejkers????????????????????")
                                //console.log(toString(eventsToConfirm.id[rowIdTest]))
                                console.log("rowData.tableData.id: " + rowData.tableData.id)
                                console.log("rowData[rowData.tableData.id]" + rowData[rowData.tableData.id])

                            }

                             */
                                //alert("You want to confirm " + rowData.tableData.id ),
                            //onClick: (newData, oldData) =>
                        /*    onClick: (eventsToConfirm, rowData) =>
                        new Promise((resolve) => {
                            //eventsToConfirm[rowData.tableData.id]
                            console.log("KLIK!!!!!!!!!!!!!!!!!!!!!!!")
                            confirmEvent(eventsToConfirm, rowData.tableData.id , resolve);

                    }),*/




                            //onClick: ({rowIdTest = rowData.tableData.id, onSubmit=confirmEvent}, rowData) => async(values, {resetForm})

                                /*axios.put('/api/account-events' + rowIdTest, {isAccepted = })
                                    .then(res => {
                                        console.log("ROW ID W rowIdTest to: " + rowIdTest)
                                        resetForm();
                                        return setEvents([...events, res.data]);
                                    }),

                                 */
                        },
                        /*{
                            icon: tableIcons.Add,
                            tooltip: "Add User",
                            isFreeAction: true,
                            onClick: (event) => alert("You want to add a new row"),
                        }

                         */
                    ]}
                />
            </div>




            <div>
                <MaterialTable
                    icons={tableIcons}
                    title="types data"
                    data={types}
                    columns={typesColumns}

                />
                {console.log("types: " + JSON.stringify(types))}
                {console.log("events: " + JSON.stringify(events))}
                {console.log("users : " + JSON.stringify(users))}
                {console.log("userColumns: " + JSON.stringify(userColumns))}
            </div>

            <div>
                <MaterialTable
                    title="Account Data"
                    data={events}
                    columns={columns}
                />
            </div>
            <div>
                <MaterialTable
                    title="Users Data"
                    data={users}
                    columns={userColumns}
                />
            </div>
        </>
    );
};

export default AccountEventTypes;
