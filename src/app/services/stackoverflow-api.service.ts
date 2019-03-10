import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { SoAnswer } from '../interfaces/so-answer';
import { Question } from '../interfaces/question';
import { Answer } from '../interfaces/answer';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StackoverflowApiService {
  constructor(private http: HttpClient) {}

  // todo постараться завернуть в константы
  getQuestions(query: string): Observable<Question[]> {
    const url = `${ environment.soApiUrl }/search?order=desc&sort=activity&intitle=${ query }&site=stackoverflow`;
    return this.http.get<SoAnswer<Question>>(url).pipe(
      map(answer => answer.items)
    );
  }

  getQuestionsByUserId(userId: number): Observable<Question[]> {
    const url = `${ environment.soApiUrl }/users/${ userId }/questions?order=desc&sort=activity&site=stackoverflow`;
    return this.http.get<SoAnswer<Question>>(url).pipe(
      map(answer => answer.items)
    );
  }

  getAnswers(questionId: string): Observable<Answer[]> {
    const url = `${ environment.soApiUrl }/questions/${ questionId }/answers?order=desc&sort=activity&site=stackoverflow&filter=withbody`;
    return this.http.get<SoAnswer<Answer>>(url).pipe(
      map(answer => answer.items)
    );
  }

  getQuestionByTag(tag: string): Observable<Question[]> {
    const url = `${ environment.soApiUrl }/questions?tagged=${ tag }&order=desc&sort=activity&site=stackoverflow`;
    return this.http.get<SoAnswer<Question>>(url).pipe(
      map(answer => answer.items)
    );
  }
}
