import {Injectable} from '@angular/core';
import {IWord} from "../model/dictionary";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  wordList: IWord [] = [
    {word: 'Hello', mean: 'Xin chao'},
    {word: 'Bye', mean: 'Tam biet'},
    {word: 'Windows', mean: 'Cua so'},
    {word: 'Book', mean: 'Quyen sach'},
    {word: 'Pen', mean: 'Cay but'},
  ]

  constructor() {
  }

  findAll():IWord []{
    return this.wordList
  }

  findByMean(word: string): IWord {
    return this.wordList.find(wordDetail => wordDetail.word === word);
  }

}
