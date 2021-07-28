import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NodeConfigService {
  type : string= "";
  name : string= "default";
  attribs :{[attrib:string]:string} | null ={};
  children :NodeConfigService[] = [];
  controlGroup : string|any; 
  validators :{[valid:string]:string} | null = {};

  public buildNode(parent:HTMLElement): void{
    console.log(parent)
    
    var child = document.createElement(this.type);
    console.log(this.attribs)
    for(const [key,value] of Object.entries(this.attribs!)){
      child.setAttribute(key,value);
    }

    for(let i=0;i<this.children.length;i++){
      this.children[i].buildNode(child);
    }

    child.setAttribute("formControlName",this.name);

    parent!.appendChild(child);

    var div = document.createElement("div");

    div.setAttribute("*ngIf",this.controlGroup+".get('"+this.name+"')?.invalid && "+this.controlGroup+".get('"+this.name+"')?.touched");
    var small = null;
    for(const [key,value] of Object.entries(this.validators!)){
      small = document.createElement("small");
      small.classList.add("text-danger");
      small.setAttribute("*ngIf",this.controlGroup+".get('"+this.name+"')?.errors?."+key)
      small.textContent = value;
    }
    parent.appendChild(div);
  }
}
