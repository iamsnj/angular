import { Component, OnInit } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];
  inputItem: string = '';
  exist: number = -1;

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        content: 'first',
        active: true
      },
      {
        content: 'second',
        active: true
      }
    ];
  }

  toggleItem(id: number) {
    this.todos.map((v, i) => {
      if (i == id) {
        v.active = !v.active;
      }
      return v;
    })
  }

  deleteItem(id: number) {
    this.todos = this.todos.filter((v, i) => i != id);
  }

  addItem() {
    this.exist = -1;
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].content == this.inputItem) {
        this.exist = 1; // item already exists
        this.inputItem = '';
        return;
      }
    }
  
    if (this.inputItem) {
      this.todos.push({
        content: this.inputItem,
        active: true
      })
    }
    
    this.exist = 0; // item added successfully
    this.inputItem = '';
  }

}
