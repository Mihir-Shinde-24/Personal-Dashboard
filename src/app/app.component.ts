import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {animate, group, query, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
    trigger('routeAnim',[
      transition(':increment',[
        style({
          position:'relative',
          overflow:'hidden'
        }),
        query(':enter,:leave',[
          style({
            display:'block',
            position:'absolute',
            top:'0',
            left:'0',
            width:'100%',
            height:'100%',
            overflow:'hidden'
          })
        ],{optional:true}),

        group([
          //Leaving element
          query(':leave',[
            animate('200ms ease-in',style({
              opacity:'0',
              transform:'translateX(-50px)',

            }))
          ],{optional:true}),

          // Slow show Entering element
          query(':enter',[
            style({
              opacity:'0',
              transform:'translateX(50px)'
            }),
            animate('250ms 120ms ease-out',style({
              opacity:'1',
              transform:'translateX(0px)'
            }))
          ],{optional:true})
        ])

      ]),
      transition(':decrement',[
        style({
          position:'relative',
          overflow:'hidden'
        }),
        query(':enter,:leave',[
          style({
            display:'block',
            position:'absolute',
            top:'0',
            left:'0',
            width:'100%',
            height:'100%',
            overflow:'hidden'
          })
        ],{optional:true}),

        group([
          //Leaving element
          query(':leave',[
            animate('200ms ease-in',style({
              opacity:'0',
              transform:'translateX(50px)',
            }))
          ],{optional:true}),

          // Slow show Entering element
          query(':enter',[
            style({
              opacity:'0',
              transform:'translateX(-50px)'
            }),
            animate('250ms 120ms ease-out',style({
              opacity:'1',
              transform:'translateX(0px)'
            }))
          ],{optional:true})
        ])

      ])
    ])
  ]
})
export class AppComponent {

  prepareRoute(outlet: RouterOutlet) {

    return outlet.isActivated? outlet.activatedRouteData['tab']: null;
  }
}
