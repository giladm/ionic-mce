import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { MCEPlugin } from '../../providers/mce.provider';

@Component({
  selector: 'page-reg-details',
  templateUrl: 'reg-details.html'
})
export class RegistrationPage {
	userId : any ;
	channelId : any ;
	appKey : any ;
  	constructor(
	    public platform: Platform,
	    public mcePlugin:MCEPlugin
  	) {
  		this.userId ="Not Registered";
  		this.channelId ="Not Registered";
  		this.mcePlugin.initMcePlugin();
  		this.showRegDetails();
	}
  
  
  	showRegDetails() {
		if (! this.mcePlugin) {return;}
		this.platform.ready().then(() => {
 			this.mcePlugin.getRegistrationDetails(this,function(keepthis,registrationDetails) {
    			keepthis.appKey =registrationDetails['appKey'];
			    keepthis.userId = registrationDetails['userId'];
			    keepthis.channelId = registrationDetails['channelId'];
		   }) 	
 		})
  	}  	
}
