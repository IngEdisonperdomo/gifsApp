import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];
  private apiKey: string = 'xK2zA9Iv8BX57cW8zIci68xNJ15wWS9I';

  //TODO cambiar any por su tipo
  public resultados: any[] = [];

  constructor(private http: HttpClient) { }

  get historial(){
    
    return [...this._historial];
  }

  buscarGifs (query: string) {

    query = query.trim().toLocaleLowerCase();

    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);
    }
  
    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=xK2zA9Iv8BX57cW8zIci68xNJ15wWS9I&q=${query}&limit=10`)
      .subscribe((resp:any) => {
        console.log(resp.data);
         this.resultados= resp.data; 
      });
  }
}
