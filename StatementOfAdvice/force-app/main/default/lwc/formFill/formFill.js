import { LightningElement, api } from 'lwc';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import { CloseActionScreenEvent } from 'lightning/actions';

export default class FormFill extends LightningElement {

   @api recordId;

   @api objectApiName;

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








   handleSuccess(e) {

// Close the modal window and display a success toast

        this.dispatchEvent(new CloseActionScreenEvent());

        this.dispatchEvent(

            new ShowToastEvent({

                title: 'Success',

                message: 'Opportunity Record Updated!',

                variant: 'success'

            })

        );

   }

}