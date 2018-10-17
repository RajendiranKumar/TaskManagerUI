var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
var ViewComponent = /** @class */ (function () {
    function ViewComponent(_service) {
        this._service = _service;
    }
    ViewComponent.prototype.ngOnInit = function () {
        this.getAllTasks();
    };
    ViewComponent.prototype.getAllTasks = function () {
        this.tasks = this._service.GetAllTasks();
    };
    ViewComponent = __decorate([
        Component({
            selector: 'app-view',
            templateUrl: './view.component.html',
            styleUrls: ['./view.component.css']
        }),
        __metadata("design:paramtypes", [SharedService])
    ], ViewComponent);
    return ViewComponent;
}());
export { ViewComponent };
//# sourceMappingURL=view.component.js.map