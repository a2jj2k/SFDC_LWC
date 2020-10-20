public with sharing class LWCCalculateNumbers {
    public LWCCalculateNumbers() {

    }

    @AuraEnabled
    public static integer getSumResult(integer firstNumber, integer secondNumber){

        return (firstNumber + secondNumber);
        
    }
}
