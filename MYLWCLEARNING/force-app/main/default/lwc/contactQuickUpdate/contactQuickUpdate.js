import { api, LightningElement } from 'lwc';

import Contact_Phone from '@salesforce/schema/Contact.Phone';
import Contact_Email from '@salesforce/schema/Contact.Email';
import Contact_LastName from '@salesforce/schema/Contact.LastName';
import Contact_FirstName from '@salesforce/schema/Contact.FirstName';
import Contact_Account from '@salesforce/schema/Contact.AccountId';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';


export default class ContactQuickUpdate extends LightningElement {

    @api recordId;
    @api objectApiName;

    fieldList = [Contact_FirstName, Contact_LastName, Contact_Email, Contact_Phone];

    /*handleContactUpdate(event){
        const evt = new ShowToastEvent({
            title: "Contact Updated...",
            message: "Contact Record:"+event.detail.fields.LastName.value+" is successfully Updated",
            //message: "Contact Record : "+event.detail.fields.LastName.value+" Successfully Updated....",
            variant: "success",
        });
        this.dispatchEvent(evt);
    }*/

    handleContactUpdate(event){
        // Run code when account is created.
        const evt = new ShowToastEvent({
            title: "Contact Update",
            message: "Contact Record:"+event.detail.fields.LastName.value+" is successfully Updated",
            variant: "success",
        });
        console.log("the starttt") 
        this.dispatchEvent(evt);
        console.log("the endddd") 
    }
}