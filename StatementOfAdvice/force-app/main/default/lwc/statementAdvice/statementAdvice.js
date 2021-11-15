import { LightningElement , api ,track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { CloseActionScreenEvent } from 'lightning/actions';
import CONTACT_OBJECT from "@salesforce/schema/Contact";
import InsurancePolicy from "@salesforce/apex/searchInsuranceController.getInsurance";
import getInsurance from '@salesforce/apex/searchInsuranceController.getInsurance';

const columns = [ 
    { label: 'Product', fieldName: 'Product__c', type: 'text' },
    { label: 'Annual Premium', fieldName: 'Annual_Premium__c', type: 'number' },
    { label: 'Coverage Amount', fieldName: 'Coverage_Amount__c', type: 'number' },
    { label: 'Coverage Type', fieldName: 'Coverage_Type__c', type: 'text' },
    { label: 'Active', fieldName: 'Active__c', type: 'text' },


]


export default class StatementAdvice extends LightningElement {

    @api recordId;

    @api objectApiName;

    @track data = getInsurance.data;
    @track columns = columns;
    @track InsurancePolicy 



    

    // Steps for page

   goBackToStepOne() {
    this.currentStep = '1';

    this.template.querySelector('div.stepTwo').classList.add('slds-hide');
    this.template
        .querySelector('div.stepOne')
        .classList.remove('slds-hide');
}

goToStepTwo() {
    this.currentStep = '2';

    this.template.querySelector('div.stepOne').classList.add('slds-hide');
    this.template
        .querySelector('div.stepTwo')
        .classList.remove('slds-hide');
}
goBackToStepTwo() {
    this.currentStep = '2';

    this.template.querySelector('div.stepThree').classList.add('slds-hide');
    this.template
        .querySelector('div.stepTwo')
        .classList.remove('slds-hide');
}
goToStepThree() {
    this.currentStep = '3';

    this.template.querySelector('div.stepTwo').classList.add('slds-hide');
    this.template
        .querySelector('div.stepThree')
        .classList.remove('slds-hide');

}
goBackToStepThree() {
    this.currentStep = '3';

    this.template.querySelector('div.stepThree').classList.add('slds-hide');
    this.template
        .querySelector('div.stepThree')
        .classList.remove('slds-hide');
}
goToStepFour() {
    this.currentStep = '4';

    this.template.querySelector('div.stepThree').classList.add('slds-hide');
    this.template
        .querySelector('div.stepFour')
        .classList.remove('slds-hide');
}

    // Data table insurance
    this.data = InsurancePolicy.getInsurance();

    
    

}

