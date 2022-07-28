import { Router } from '@angular/router';
import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-red-all',
  templateUrl: './red-all.component.html',
  styleUrls: ['./red-all.component.css']
})
export class RedAllComponent implements OnInit {

  closed = 0;

  list: Todo[] = [];
  listFinished: Todo[] = [];
  
  constructor(private service: TodoService, private router: Router) { }

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

  finalizar(item: Todo): void{
    item.finalizado = true;
    this.service.update(item).subscribe(() => {
      this.service.message('Task completed successfully!');
      this.list = this.list.filter(todo => todo.id !== item.id);
      this.closed++
    })
  }

  delete(id: any):void {
    this.service.delete(id).subscribe((resposta) => {
      if(resposta === null){
        this.service.message('Task successfully deleted!');
        this.list = this.list.filter(todo => todo.id !== id);
      }
    })
  }

  navegarParaFinalizadas(): void{
    this.router.navigate(['finalizados'])
  }
}
