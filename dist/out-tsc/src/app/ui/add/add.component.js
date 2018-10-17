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
import { Task } from 'src/app/models/task';
import { SharedService } from 'src/app/services/shared.service';
var AddComponent = /** @class */ (function () {
    function AddComponent(_service) {
        this._service = _service;
        this.item = new Task();
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent = __decorate([
        Component({
            selector: 'app-add',
            templateUrl: './add.component.html',
            styleUrls: ['./add.component.css']
        }),
        __metadata("design:paramtypes", [SharedService])
    ], AddComponent);
    return AddComponent;
}());
export { AddComponent };
//# sourceMappingURL=add.component.js.map