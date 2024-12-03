import { Component, Input,} from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';

import { type NewTaskData } from './task/task.model';

import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) selectedUserId!: string;
  @Input({required:true}) selectedUserName!: string;
  isAddingTask = false;

  constructor(private taskService:TasksService) {}

  get selectedUserTasks()
  {
    return this.taskService.getUserTasks(this.selectedUserId)
  }

  onAddNewTask()
  {
    this.isAddingTask = true;
  }

  onCloseAddTask()
  {
    this.isAddingTask = false;
  }

}
