import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-red-all',
  templateUrl: './red-all.component.html',
  styleUrls: ['./red-all.component.css']
})
export class RedAllComponent implements OnInit {

  closed = 0;

  list: Todo[] = [];
  listFinished: Todo[] = [];
  
  constructor(private service: TodoService) { }

  ngOnInit(): void {
    this.findAll();
    
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      resposta.forEach((todo) => {
        if (todo.finalizado) {
          this.listFinished.push(todo);
        } else {
          this.list.push(todo);
        }
      });
      this.closed = this.listFinished.length;
    });
  }

}
