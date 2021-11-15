import { LightningElement, api} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { CloseActionScreenEvent } from 'lightning/actions';

export default class InsuranceData extends LightningElement {

    @api recordId;
    @api objectApiName;

}