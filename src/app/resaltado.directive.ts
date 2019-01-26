import { Directive, ElementRef } from '@angular/core';//ElementRef cuando seleccionas en elemento o le aplicamos la directiva al elemento, consigue el objeto nativo.

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(public el: ElementRef) { 
  }

  //en las directivas tambien se puede utilizar el metodo OnInit

  ngOnInit(){

    var element = this.el.nativeElement;
    var estilo = element.style;
                  estilo.background = "blue";
                  estilo.color = "white";
                  estilo.padding = "20px";
                  estilo.marginTop = "20px";
                  estilo.marginBottom = "20px";

                  element.innerText = element.innerText.toUpperCase();

  }

}
