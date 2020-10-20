import { LightningElement, track } from 'lwc';
import createAccounts from '@salesforce/apex/LWCAccountCreationController.createAccounts';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class MultipleAccountInsertion extends LightningElement {

    @track keyIndex = 0;
    @track accountRecList = [
        {
            Name: '',
            Industry: '',
            Phone: ''
        }

    ];

    addRow(){
        this.keyIndex+1;
        this.accountRecList.push({
            Name: '',
            Industry: '',
            Phone: ''

        });
    }

    changeHandler(event){
        if(event.target.name==='accName')
            this.accountRecList[event.target.accessKey].Name = event.target.value;
        else if(event.target.name==='accIndustry'){
            this.accountRecList[event.target.accessKey].Industry = event.target.value;
        }
        else if(event.target.name==='accPhone'){
            this.accountRecList[event.target.accessKey].Phone = event.target.value;
        }

    }

    saveMultipleAccounts(){

        createAccounts({ accountList : this.accountRecList })
            .then(result => {
                this.message = result;
                this.error = undefined;                
                this.accountRecList.forEach(function(item){                   
                    item.Name='';
                    item.Industry='';
                    item.Phone='';                   
                });

                //this.accountRecList = [];
                if(this.message !== undefined) {
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Success',
                            message: 'Accounts Created!',
                            variant: 'success',
                        }),
                    );
                }
                
                console.log(JSON.stringify(result));
                console.log("result", this.message);
            })
            .catch(error => {
                this.message = undefined;
                this.error = error;
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating records',
                        message: error.body.message,
                        variant: 'error',
                    }),
                );
                console.log("error", JSON.stringify(this.error));
            });

    }

    removeRow(event){
        console.log("Inside remove row")
        if(this.accountRecList.length>=1){             
            this.accountRecList.splice(event.target.accessKey,1);
            this.keyIndex-1;
       }

    }
}