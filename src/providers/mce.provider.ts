import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

@Injectable()
export class MCEPlugin {
	public mceObj: any=null;

    constructor(public platform: Platform ) {
        console.log("MCEPlugin before initMcePlugin");
    	this.initMcePlugin();
    }
    	
	initMcePlugin() {
		this.platform.ready().then(() => {
			if(window.hasOwnProperty("MCEPlugin")) {
		        this.mceObj =window["MCEPlugin"];
		        console.log("MCEPlugin initMcePlugin");
		    } else {
		        alert ("MCEPlugin is not Running on browser");
		        console.log("Running on a browser");
		    }
		});
	}


	getRegistrationDetails(keepthis,callback) {
		if (! this.mceObj) return ;//browser
//		if (! this.mceObj) {callback('MCEPlugin not available on browser')};
		var registrationDetails ={} ; // returns
		this.getAppKey(this.mceObj).then((result) =>{
		    registrationDetails['appKey']=result ;
		    this.getRegistration(this.mceObj).then((result) =>{
				registrationDetails['userId'] = result['userId'];
			    registrationDetails['channelId'] = result['channelId'];
			    callback (keepthis,registrationDetails);
				}) 
		}) 	.catch(function(error){
	        console.error("got error:"+error);
	        registrationDetails['appKey']=error;
		    callback (error);
		});
	} 
				
	
 	getAppKey(mceObj){
		if (! this.mceObj) return ;//browser
	    return new Promise(function(resolve, reject){
	        mceObj.getAppKey(function(result){
	            if(! result){
	            	result ='getAppKey error';
	                reject(result);
	            }
	            else{
	                resolve(result);
	            }
	        })
	    });
	}  
  
  	getRegistration(mceObj) {
		if (! this.mceObj) return ;//browser
    	return new Promise(function(resolve, reject){
		    mceObj.getRegistrationDetails(function(details) {
		        if (!details) {
	                reject('Not Registered');
		        } else {
				    if (typeof details['userId'] == "undefined" || typeof details['channelId'] == "undefined") {
		                reject('Not Registered');
				    } else {
				    	resolve(details);
				    }
				}
			})
		});
    }   
    
   	getVersionDetails(keepthis,callback) {
		if (! this.mceObj) return ;//browser
		var versionDetails ={} ; // returns
		var mcePlugin = this.mceObj ;
		if (! this.mceObj) return ;//browser
		mcePlugin.getPluginVersion(function(version) {
    			versionDetails['pluginVer']=version;
    			mcePlugin.getSdkVersion(function(version) {
	    			versionDetails['sdkVer']=version;
	    			callback (keepthis,versionDetails);
	    		});
		}); 
	}

	// attributes
	sendAttributes(json) {
		if (! this.mceObj) {return;}
		this.mceObj.queueUpdateUserAttributes(json);

	}


}
