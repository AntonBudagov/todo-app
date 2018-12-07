import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Task} from '../../task/model/task.interface';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    private headers = new HttpHeaders({'Content-Type': 'application/json'});

    constructor(private httpClient: HttpClient,
                private url: string) {
    }

    public create(item: Task): Observable<Task> {
        return this.httpClient
            .post<object>(`${this.url}`, item as any)
            .pipe(
                tap((i: Task) => console.log(`added w/ id=${i.id}`)),
                catchError(this.handleError<Task>('addTask')));
    }

    public update(item: Task): Observable<Task> {
        return this.httpClient
            .put<Task>(`${this.url}/${item.id}`, item);
    }

    public read(id: number): Observable<any> {
        return this.httpClient
            .get<Task>(`${this.url}/${id}`);
    }

    public list(): Observable<any[]> {
        return this.httpClient
            .get<any[]>(`${this.url}/`);
    }

    public delete(id: number) {
        return this.httpClient
            .delete(`${this.url}/${id}`, {headers: this.headers})
            .pipe(
                tap(_ => console.log(`deleted id=${id}`)),
                catchError(this.handleError<Task>('delete'))
            );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            console.error(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
