import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor( private t:HttpClient ) { }

  update:any;
  create:any;

Get(){
 return this.t.get('http://localhost:3000/posts');
}


Post(c){
  return this.t.post('http://localhost:3000/posts/',c);
 }


 Put(c){
  return this.t.put('http://localhost:3000/posts/'+ c.id,c);
 }

 Delete(c){
  return this.t.delete('http://localhost:3000/posts/'+c.id);
 }

}
