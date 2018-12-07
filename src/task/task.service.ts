import {Injectable} from '@angular/core';

import {BehaviorSubject} from 'rxjs';

import {HttpClient} from '@angular/common/http';
import {AppService} from '../common/services/app.service';

@Injectable({providedIn: 'root'})
export class TaskService extends AppService {
    private taskSearchSource = new BehaviorSubject<string>('');
    newSearch = this.taskSearchSource.asObservable();

    private taskSearchSource2 = new BehaviorSubject<string>('');
    newSearch2 = this.taskSearchSource2.asObservable();

    constructor(httpClient: HttpClient) {
        super(httpClient, 'api/tasks');
    }

    public emitSearch(title: string) {
        this.taskSearchSource.next(title);
    }

    public emitSearch2(title: string) {
        this.taskSearchSource2.next(title);
    }
}
