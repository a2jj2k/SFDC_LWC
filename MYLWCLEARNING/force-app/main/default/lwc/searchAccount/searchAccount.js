import { LightningElement, track, wire } from 'lwc';
import getAccounts from '@salesforce/apex/LWCAccountSearch.getAccounts';

export default class SearchAccount extends LightningElement {
    accountName = '';
    @track accountList = [];

    @wire(getAccounts,{actName:'$accountName'}) retrieveAccounts({error,data}){
        if(data){
            this.accountList = data;
        }else if (error){

        }

    }

    handleKeyChange(event){
        this.accountName = event.target.value;

    }

}