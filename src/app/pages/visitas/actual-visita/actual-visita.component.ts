import { Component, OnInit } from '@angular/core';
import { log } from 'console';


@Component({
  selector: 'ngx-actual-visita',
  templateUrl: './actual-visita.component.html',
  styleUrls: ['./actual-visita.component.scss']
})
export class ActualVisitaComponent implements OnInit {

  listaInmuebles = [
    {
      "fechaSolicitud": "15/05/2023",
      "fechaVisita": "22/05/2023",
      "Hora": "05:23 pm",
      "Referencia": "0000",
      "comentario": "Gran lugar"
    },
    {
      "fechaSolicitud": "16/05/2023",
      "fechaVisita": "23/05/2023",
      "Hora": "04:23 pm",
      "Referencia": "1111",
      "comentario": "Magnífico"
    },
    {
      "fechaSolicitud": "17/05/2023",
      "fechaVisita": "24/05/2023",
      "Hora": "02:23 pm",
      "Referencia": "2222",
      "comentario": "Estupenda vista"
    },
    {
      "fechaSolicitud": "18/05/2023",
      "fechaVisita": "25/05/2023",
      "Hora": "03:23 pm",
      "Referencia": "3333",
      "comentario": "Mala ubicación"
    },
  ];

  constructor() { }

  ngOnInit(): void {
    console.log(this.listaInmuebles);
  }





}
