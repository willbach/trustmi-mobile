var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { observable, action } from 'mobx';
export default class UserStore {
    constructor() {
        this.mnemonic = '';
        this.privateKey = '';
        this.email = '';
    }
    retrievePIN() {
    }
    comparePIN() {
    }
    retrieveUser() {
    }
    createUser(email) {
        this.email = email;
        //TODO: generate mnemonic
    }
}
__decorate([
    observable,
    __metadata("design:type", Object)
], UserStore.prototype, "mnemonic", void 0);
__decorate([
    observable,
    __metadata("design:type", Object)
], UserStore.prototype, "privateKey", void 0);
__decorate([
    observable,
    __metadata("design:type", Object)
], UserStore.prototype, "email", void 0);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserStore.prototype, "retrievePIN", null);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserStore.prototype, "comparePIN", null);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserStore.prototype, "retrieveUser", null);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserStore.prototype, "createUser", null);
//# sourceMappingURL=index.js.map