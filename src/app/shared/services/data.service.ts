import { Injectable } from '@angular/core';


export interface MayHaveId {
  id:any;
}

@Injectable({
  providedIn: 'root'
})
export class DataService<T extends MayHaveId> {

  data!: T[];

  getAll():T[]{
    return this.data;
  }

  get(id:string){
    return this.data.find((d:T) => id === d.id);
  }

  add(d: T){
    this.data.push(d);
  }

  update(id:string, updatedFields: Partial<T>){
    const d = this.get(id);
    if(d){
      Object.assign(d,updatedFields);
    }
  }

  delete(id:string){
    const dataIndex = this.data.findIndex((d:T)=> d.id===id);
    if(dataIndex == -1) return;
    this.data.splice(dataIndex,1);
  }

}


