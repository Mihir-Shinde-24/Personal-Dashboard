export class NotificationData{

    constructor(private _text: string, private _duration: number=4000) {}


    get text(): string {
        return this._text;
    }

    get duration(): number {
        return this._duration;
    }
}
