import { Component, OnInit } from '@angular/core';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  pageTitle: string = '';
  todos: Todo[] = [];
  newTodoTitle: string = '';
  completedCount: number = 0;



  // Constructor runs first
  constructor() {
    console.log('Constructor called');
    // Notice we don't initialize data here
  }

  // ngOnInit runs after constructor
  ngOnInit() {
    console.log('ngOnInit called');

    // Initialize component data
    this.pageTitle = 'My Todo List';
    this.todos = [
      { id: 1, title: 'Learn Angular', completed: false },
      { id: 2, title: 'Understand ngOnInit', completed: false },
      { id: 3, title: 'Build a project', completed: false }
    ];

    // Calculate initial completed count
    this.updateCompletedCount();
  }


  // Helper methods
  addTodo() {
    if (this.newTodoTitle.trim()) {
      // Find the highest existing ID
      const maxId = Math.max(...this.todos.map(t => t.id), 0);

      const newTodo: Todo = {
        id: maxId + 1,  // Use highest ID + 1
        title: this.newTodoTitle,
        completed: false
      };
      this.todos.push(newTodo);
      this.newTodoTitle = '';
      this.updateCompletedCount();
    }
}

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.updateCompletedCount();
  }

  onTodoStatusChange() {
    this.updateCompletedCount();
  }

  updateCompletedCount() {
    this.completedCount = this.todos.filter(todo => todo.completed).length;
  }
}
