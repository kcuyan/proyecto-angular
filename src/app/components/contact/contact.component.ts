import { Component, OnInit, ViewChild } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public widthSlider:number;
  public anchuraToSlider:number;
  public autor:any;
  @ViewChild('textos') textos;
  @ViewChild ('prueba_color') changeColor;
  public prueba: any;
  public estilo: any;
  public color_p: any;

  constructor() { }

  ngOnInit() {
    //alert(this.textos.nativeElement.textContent);
    this.prueba = this.textos.nativeElement.textContent;

    
    

   }

  cargarSlider(){
    this.anchuraToSlider = this.widthSlider;
  }
  getAutor(event){
    //console.log(event);//para ver que se capture el evento y conseguir datos AUTOR
    this.autor = event;
    console.log(this.autor);
  }

  capturar(){
    this.color_p = this.changeColor.nativeElement.value;
    this.estilo = {
      color: this.color_p
    };
    console.log(this.changeColor.nativeElement.value);
  }
}


