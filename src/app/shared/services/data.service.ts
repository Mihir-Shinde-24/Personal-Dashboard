import {Injectable, OnDestroy} from '@angular/core';
import {fromEvent, Subscription} from "rxjs";


export interface MayHaveId {
    id: any;
}

@Injectable({
    providedIn: 'root'
})
export class DataService<T extends MayHaveId> implements OnDestroy{

    data: T[] = [];
    key!: string;
    storageSub!: Subscription;

    getAll(): T[] {
        return this.data;
    }

    get(id: string) {
        return this.data.find((d: T) => id === d.id);
    }

    add(d: T) {
        this.data.push(d);
        this.saveStateToLocalStorage();
    }

    update(id: string, updatedFields: Partial<T>) {
        const d = this.get(id);
        if (d) {
            Object.assign(d, updatedFields);
            this.saveStateToLocalStorage();
        }
    }

    delete(id: string) {
        const dataIndex = this.data.findIndex((d: T) => d.id === id);
        if (dataIndex == -1) return;
        this.data.splice(dataIndex, 1);
        this.saveStateToLocalStorage();
    }

    saveStateToLocalStorage() {
        localStorage.setItem(this.key, JSON.stringify(this.data));
    }

    loadState() {
        try {
            const lsStr: any = localStorage.getItem(this.key);
            if (typeof lsStr == "string") {

                this.data.length = 0; // clear the data while keeping the reference
                this.data.push(...JSON.parse(lsStr));
            }
        }
        catch (e) {
            console.log("There was an Error while retrieving data from localstorage",e);
        }
    }

    onLocalStorageDataChange(){
        this.storageSub = fromEvent(window, 'storage').subscribe((event)=>{
            if ((<StorageEvent>event).key == this.key){
                this.loadState();
            }
        })
    }

    ngOnDestroy() {
        if(this.storageSub){
            this.storageSub.unsubscribe();
        }
    }


}


