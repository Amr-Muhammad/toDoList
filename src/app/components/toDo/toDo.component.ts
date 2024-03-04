import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'toDo',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './toDo.component.html',
  styleUrl: './toDo.component.css'
})
export class ToDoComponent implements OnInit {

  newTask: string = ''
  tasks: Array<string> = []
  editedTask: string = ''
  isEditting: boolean = false
  taskEditIndex: number = 0

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('tasks')) {
      this.tasks = JSON.parse(localStorage.getItem('tasks') || '{}')
    }
  }

  addTask() {
    if (this.newTask.trim() != '') {
      this.tasks.push(this.newTask.trim())
      this.newTask = ''
    }
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }

  removeTask(i: number) {
    this.tasks.splice(i, 1)
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }

  editTask(task: string, i: number) {
    this.isEditting = true
    this.newTask = task;
    (document.querySelector('.form-control') as HTMLInputElement).focus();
    this.taskEditIndex = i

  }

  updateTask(edittedTask: string) {
    this.isEditting = false
    this.tasks[this.taskEditIndex] = edittedTask
    this.newTask = ''
    localStorage.setItem('tasks', JSON.stringify(this.tasks))

  }
}
