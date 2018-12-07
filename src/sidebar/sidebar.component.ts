import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TaskService} from '../task/task.service';
import {debounceTime, distinctUntilChanged, map, startWith} from 'rxjs/operators';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {
    public dateList: any[];
    public autoCompleteVal = new FormControl();
    public selectCompleteVal = new FormControl();
    public menuItems = [
        {path: '/task-list', title: 'Task List', icon: 'list', class: ''},
        {path: '/task-add', title: 'Add task', icon: 'add', class: ''},
    ];

    constructor(private taskService: TaskService) {
    }

    public ngOnInit() {
        this.autoCompleteVal.valueChanges.pipe(
            debounceTime(500),
            distinctUntilChanged(),
            startWith('')).subscribe( (title) => {
            this.taskService.emitSearch(title);
        });
        this.selectCompleteVal.valueChanges.pipe(
            debounceTime(100),
            distinctUntilChanged(),
            startWith('')).subscribe( (date) => {
                this.taskService.emitSearch2(date);
        });
    }
}
