import { componentFactoryName } from '@angular/compiler';
import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, Validators, ValidatorFn, ValidationErrors, AbstractControl} from "@angular/forms";
import { FormComponentComponent } from '../form-component/form-component.component';
import { NodeConfigService } from '../services/node-config.service';
import { SubmitService } from '../services/submit-service.service';


@Component({
  selector: 'app-submit-application',
  templateUrl: './submit-application.component.html',
  styleUrls: ['./submit-application.component.css']
})
export class SubmitApplicationComponent {
  componentRef : ComponentRef<FormComponentComponent> | null = null;

  test = new NodeConfigService();  


  constructor(private fb : FormBuilder, private ss :SubmitService, private valids: SubmitApplicationValidators,private entry:ViewContainerRef,private resolver:ComponentFactoryResolver) { 
    this.test.type = "div";
    this.test.attribs = {
      "class" : "p-5",
      "style" : "background-color : red;"
    }

    var m = new NodeConfigService();
    m.type= "h1"
    this.test.children = [
      m
    ]
    
  }

  createComponent(message:string){
    this.entry.clear()
    const factory = this.resolver.resolveComponentFactory(FormComponentComponent)
    this.componentRef = this.entry.createComponent(factory);
    this.componentRef.instance.label = message;

  }
}
