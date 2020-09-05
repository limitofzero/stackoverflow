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
  private readonly additionalParams = 'order=desc&sort=activity&site=stackoverflow';

  constructor(private http: HttpClient) {}

  getQuestions(query: string): Observable<Question[]> {
    const url = `${ environment.soApiUrl }/search?${ this.additionalParams }&intitle=${ query }`;
    return this.http.get<SoAnswer<Question>>(url).pipe(
      map(answer => answer.items)
    );
  }

  getQuestionsByUserId(userId: number): Observable<Question[]> {
    const url = `${ environment.soApiUrl }/users/${ userId }/questions?${ this.additionalParams }`;
    return this.http.get<SoAnswer<Question>>(url).pipe(
      map(answer => answer.items)
    );
  }

  getAnswers(questionId: string): Observable<Answer[]> {
    const url = `${ environment.soApiUrl }/questions/${ questionId }/answers?filter=withbody&${ this.additionalParams}`;
    return this.http.get<SoAnswer<Answer>>(url).pipe(
      map(answer => answer.items)
    );
  }

  getQuestionByTag(tag: string): Observable<Question[]> {
    const url = `${ environment.soApiUrl }/questions?tagged=${ tag }&${ this.additionalParams }`;
    return this.http.get<SoAnswer<Question>>(url).pipe(
      map(answer => answer.items)
    );
  }
}
