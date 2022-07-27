import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-red-all',
  templateUrl: './red-all.component.html',
  styleUrls: ['./red-all.component.css']
})
export class RedAllComponent implements OnInit {

  list: Todo[] = [
    {
      titulo: "Teste",
      dataParaFinalizar: new Date,
      finalizado: false
    },
    {
      titulo: "Teste 2",
      dataParaFinalizar: new Date,
      finalizado: false
    }
  ]
  

  constructor() { }

  ngOnInit(): void {
  }

}
