import { LightningElement, track, api } from 'lwc';
import getSumResult from '@salesforce/apex/LWCCalculateNumbers.getSumResult';

export default class Calculate2Numbers extends LightningElement {

    @track fNumber = 0;
    @track sNumber = 0;
    @track sum = 0;
    @track errors;

    @api title;
    @api greetings;


    handleClick(){
        console.log('inside click');
        getSumResult({firstNumber:this.fNumber, secondNumber:this.sNumber})
        .then(result=>{
            this.sum = result;
        })
        .catch(error=>{
            this.errors = error;
        });
    }

    handleChange(event){
        console.log('invoked');
        if(event.target.name == 'fnumber'){
            this.fNumber = event.target.value;
            console.log(this.fNumber);
        }else if(event.target.name == 'snumber'){
            this.sNumber = event.target.value;
            console.log(this.sNumber);
        }

    }
}