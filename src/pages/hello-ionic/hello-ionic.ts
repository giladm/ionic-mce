import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { MCEPlugin } from '../../providers/mce.provider';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
	pluginVer : any ;
	sdkVer : any ;
  	constructor(
	    public platform: Platform,
	    public mcePlugin:MCEPlugin
  	) {
  		this.pluginVer ="Not initilized";
  		this.sdkVer ="Not initilizedd";
  		this.mcePlugin.initMcePlugin();
  		this.showVersionDetails();
	}
  
  
  	showVersionDetails() {
		this.platform.ready().then(() => {
 			this.mcePlugin.getVersionDetails(this,function(keepthis,versionDetails) {
    			keepthis.pluginVer =versionDetails['pluginVer'];
			    keepthis.sdkVer = versionDetails['sdkVer'];
		   }) 	
 		})
  	}  	
}
