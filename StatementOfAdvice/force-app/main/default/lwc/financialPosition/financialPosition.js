import { LightningElement, api} from 'lwc';
import { CloseActionScreenEvent } from 'lightning/actions';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class FinancialPosition extends LightningElement {

    @api recordId;
    @api objectApiName;


    //Get Net Worth Based on TA and TL
    totalAssetsValue = 0;
    totalLiabilitiesValue = 0;


    //Change event for Total Assets
    handleTotalAssetsChange(event) {
        this.totalAssetsValue = event.target.value;
        alert(this.totalAssetsValue);
    }

    //Change event for Total Liabilities
    handleTotalLiabilitiesChange(event) {
        this.totalLiabilitiesValue = event.target.value;
        alert(this.totalLiabilitiesValue);
    }

    //get Net Worth
    get netWorth() {
        return this.totalAssetsValue - this.totalLiabilitiesValue;
        alert(this.netWorth);
        console.log(this.netWorth);
    }


  

}