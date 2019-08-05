import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { MCEPlugin } from '../../providers/mce.provider';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-attributes',
  templateUrl: 'attributes.html'
})
export class AttributesPage {
	attribute : any ;
	value : any ;
    public attrForm: any;

  	constructor(
	    public platform: Platform,
        public formBuilder: FormBuilder,
	    public mcePlugin:MCEPlugin
  	) {
  		this.attribute ="attribute";
  		this.value ="value";
  		this.mcePlugin.initMcePlugin();
        this.attrForm = formBuilder.group({
            'attribute': ['', Validators.compose([Validators.minLength(1), Validators.maxLength(80), Validators.required])],
            'value': ['', Validators.compose([ Validators.minLength(1)]) ],
        });
	}


  	sendAttributes() {
      if (! this.mcePlugin) {return;}
  		this.platform.ready().then(() => {
        var attribute = this.attribute;
        var value = this.value;
        var json = {};
        json[attribute] = value;

   			this.mcePlugin.sendAttributes(json) ;
  	 } );
    }  	
}
