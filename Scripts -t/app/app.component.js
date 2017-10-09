var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
require('rxjs/add/operator/map');
var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
    }
    AppComponent.prototype.ngOnInit = function () {
        alert("Hi Siji");
        //this.http.get('../employee.json')
        //    .map((res: Response) => res.json())
        //    .subscribe(
        //    data => { this.employee = data; alert(JSON.stringify(this.employee)); },
        //    err => console.error(err),
        //    () => console.log('done')
        //    );
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.component.html'
        })
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
