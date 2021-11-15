public with sharing class searchInsuranceController {
    @AuraEnabled( cacheable = true ) 
    public static list<Insurance_Policy_IP__c> getInsurance() {
        
        return [ SELECT Account__c,Active__c,Annual_Premium__c,Coverage_Amount__c,Coverage_Type__c
         FROM Insurance_Policy_IP__c ];
         
    }

}
