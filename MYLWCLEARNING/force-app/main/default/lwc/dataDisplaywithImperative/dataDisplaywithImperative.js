import { LightningElement, track } from 'lwc';
import getAccountRecordsList from '@salesforce/apex/LWCAccountController.getAccountRecordsList';

export default class DataDisplaywithImperative extends LightningElement {
    @track accountRecords;
    @track errors;
    @track columns = [
        { label: 'Name', fieldName: 'Name', type: 'text' },
        { label: 'Industry', fieldName: 'Industry', type: 'text' },       
    ];

    connectedCallback(){

        getAccountRecordsList()
            .then(result=>{
                this.accountRecords = result;
            })
            .catch(error=>{
                this.errors = error;
            });

    }

}