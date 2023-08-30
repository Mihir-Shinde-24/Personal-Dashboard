import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {animate, group, query, style, transition, trigger} from "@angular/animations";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        trigger('routeAnim', [
            transition(':increment', [
                style({
                    position: 'relative',
                    overflow: 'hidden'
                }),
                query(':enter,:leave', [
                    style({
                        display: 'block',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                        overflow: 'hidden'
                    })
                ], {optional: true}),

                group([
                    //Leaving element
                    query(':leave', [
                        animate('200ms ease-in', style({
                            opacity: '0',
                            transform: 'translateX(-50px)',

                        }))
                    ], {optional: true}),

                    // Slow show Entering element
                    query(':enter', [
                        style({
                            opacity: '0',
                            transform: 'translateX(50px)'
                        }),
                        animate('250ms 120ms ease-out', style({
                            opacity: '1',
                            transform: 'translateX(0px)'
                        }))
                    ], {optional: true})
                ])

            ]),
            transition(':decrement', [
                style({
                    position: 'relative',
                    overflow: 'hidden'
                }),
                query(':enter,:leave', [
                    style({
                        display: 'block',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                        overflow: 'hidden'
                    })
                ], {optional: true}),

                group([
                    //Leaving element
                    query(':leave', [
                        animate('200ms ease-in', style({
                            opacity: '0',
                            transform: 'translateX(50px)',
                        }))
                    ], {optional: true}),

                    // Slow show Entering element
                    query(':enter', [
                        style({
                            opacity: '0',
                            transform: 'translateX(-50px)'
                        }),
                        animate('250ms 120ms ease-out', style({
                            opacity: '1',
                            transform: 'translateX(0px)'
                        }))
                    ], {optional: true})
                ])

            ])
        ]),
        trigger('bgImgAnim', [
            transition(':leave', [
                style({
                    opacity: 1,
                }),
                animate('1000ms 1000ms', style({
                    opacity: 0
                }))
            ]),
            transition(':enter', [
                style({
                    opacity: 0
                }),
                animate(1000, style({
                    opacity: 1
                }))
            ]),
        ])
    ]
})
export class AppComponent implements OnDestroy, OnInit {

    readonly fallBackBgImg: string = "https://images.unsplash.com/photo-1691437196656-a886a056d1dd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MzEyMTQyMA&ixlib=rb-4.0.3&q=80&w=1920"
    bgImg: string | null = this.fallBackBgImg;
    loadingBG: boolean = false;
    timeout: any;
    key: string = 'background';

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
        this.fetchBgFromLocalStorage();
        this.saveBgToLocalStorage();
    }

    fetchBgFromLocalStorage() {
        try {
            const str = localStorage.getItem(this.key);
            if (str) {
                this.bgImg = JSON.parse(str);
            }
        } catch (err) {
            console.log(err)
            this.setFallBackImg();
        }
    }

    prepareRoute(outlet: RouterOutlet) {
        return outlet.isActivated ? outlet.activatedRouteData['tab'] : null;
    }

    saveBgToLocalStorage() {
        localStorage.setItem(this.key, JSON.stringify(this.bgImg))
    }

    changeBGImage() {
        this.loadingBG = true;
        this.http.head('https://source.unsplash.com/random/2560x1440', {observe: "response"}).subscribe((head) => {
            console.log(head)
            if (head.status == 200 && head.statusText === "OK" && head.ok) {
                this.bgImg = null;
                this.timeout = setTimeout(() => {
                    this.bgImg = head.url;
                    this.saveBgToLocalStorage();
                    this.loadingBG = false;
                }, 1000)
            }
        }, error => {
            console.log(error)
            this.setFallBackImg();
        })
    }

    ngOnDestroy(): void {
        clearTimeout(this.timeout);
    }

    setFallBackImg() {
        this.bgImg = this.fallBackBgImg;
        this.saveBgToLocalStorage();
    }
}
