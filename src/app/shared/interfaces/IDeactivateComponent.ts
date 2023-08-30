import {Observable} from "rxjs";

export interface IDeactivateComponent{

    canExit(): boolean | Observable<boolean> | Promise<boolean>;
}
