import { Component,OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';


import 'rxjs/add/operator/map';

@Component({
    moduleId: module.id,
    selector: 'my-app',
  templateUrl: 'app.component.html'
 
 
})

export class AppComponent implements OnInit{
 

    constructor(private http: Http) { }

ngOnInit()
{
    alert("Hi Siji");
    //this.http.get('../employee.json')
    //    .map((res: Response) => res.json())
    //    .subscribe(
    //    data => { this.employee = data; alert(JSON.stringify(this.employee)); },
    //    err => console.error(err),
    //    () => console.log('done')
    //    );

}
     
}

