import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {TaskService} from '../task.service';
import {NgForm} from '@angular/forms';
import {Task} from '../model/task.interface';
import {Location} from '@angular/common';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.sass']
})
export class EditTaskComponent implements OnInit {
  task: Task;
  isLoaded: boolean = false;
  @ViewChild('taskForm') toForm: NgForm;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private location: Location
  ) {
  }

  ngOnInit() {
    this.getTaskId();
  }

  public getTaskId() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.taskService.read(id)
    .subscribe(task => this.task = task);
    this.isLoaded = true;
  }

  public save(): void {
    this.taskService.update(this.task)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
