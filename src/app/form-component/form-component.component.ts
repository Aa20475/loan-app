import { style } from '@angular/animations';
import { AfterContentChecked, AfterContentInit, Component, ElementRef, Input, OnInit, ViewChild, ViewContainerRef, ɵɵsetComponentScope } from '@angular/core';
import { ValidatorFn } from '@angular/forms';
import { NodeConfigService } from '../services/node-config.service';



@Component({
  selector: 'form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements AfterContentInit {

  @Input()
  label : string = "Blank Label";

  @Input()
  config : NodeConfigService = new NodeConfigService();
  
  labelDiv:HTMLElement|null=null;
  inputDiv:HTMLElement|null = null;

  constructor(private element : ElementRef) { 
  }

  ngAfterContentInit(): void {
    console.log(this.element.nativeElement.children)
    this.labelDiv= this.element.nativeElement.children.item(0).children.item(0);
    this.inputDiv= this.element.nativeElement.children.item(0).children.item(1);
    this.labelDiv!.textContent = this.label // Adding the label to the div

    this.config.buildNode(this.inputDiv!);
  }

}
