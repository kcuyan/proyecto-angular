import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $:any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() anchura:number;
  @Output() conseguirAutor = new EventEmitter();

  public autor: any;

  constructor() { 

    this.autor = {
      nombre: "Kevin Cuyan",
      website: "https://www.google.com/",
      youtube: "Kevin Cuyan"
    };
  }

  ngOnInit() {

    $("#logo").click(function(e){
      e.preventDefault();      
        $("header").css("background","green")
                  .css("height","50px");
    });

    $(".galeria").bxSlider({
      mode: 'fade',
      captions: false,
      slideWidth: this.anchura
    });
  }

lanzar(event){
  //console.log(event);//para ver que el evento que capture con el mouse event
  this.conseguirAutor.emit(this.autor)
}

}
