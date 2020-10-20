import { LightningElement, track } from 'lwc';
import createAccount from '@salesforce/apex/LWCAccountCreationController.createAccount';

import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_TYPE from '@salesforce/schema/Account.Type';
import ACCOUNT_PHONE from '@salesforce/schema/Account.Phone';

import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class AccountCreationApex extends LightningElement {

    @track accountid;
    @track errors;
    @track accountRecord = {
        Name:ACCOUNT_NAME,
        Type:ACCOUNT_TYPE,
        Phone:ACCOUNT_PHONE
    };

    handleNameChange(event){
        this.accountRecord.Name = event.target.value;

    }

    handleTypeChange(event){
        this.accountRecord.Type = event.target.value;

    }

    handlePhoneChange(event){
        this.accountRecord.Phone = event.target.value;
        //console.log(accountRecord.Phone);
        
    }

    handleSaveAccount(){
        console.log("Inside handleSaveAccount250");
        //window.console.log(accountRecord);
        //console.log(accountRecord.Type);
        //console.log(accountRecord.Phone);
        console.log("Inside handleSaveAccount123");
        createAccount({accountRecObj: this.accountRecord})
        .then(result=>{
            this.accountRecord = {};
            this.accountid = result.Id;
            window.console.log(this.accountid);
            const toastEvent = new ShowToastEvent({
                title: 'Success',
                message: 'Account Record is Created Successfully',
                variant: 'success'
            });
            this.dispatchEvent(toastEvent);
        })
        .catch(error=>{
            this.errors = error.message;
        });

    }
}