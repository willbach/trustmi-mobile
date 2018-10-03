var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { observable, action } from "mobx";
export default class SignupStore {
    constructor() {
        this.email = "";
        this.emailError = "";
        this.isValid = false;
    }
    emailOnChange(id) {
        this.email = id;
        this.validateEmail();
    }
    validateEmail() {
        const emailPatter = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        const required = this.email ? undefined : "Required";
        this.emailError = required
            ? required
            : emailPatter.test(this.email) ? undefined : "Invalid email address";
    }
    validateForm() {
        if (this.emailError === undefined) {
            this.isValid = true;
        }
    }
    clearStore() {
        this.email = "";
        this.emailError = "";
        this.isValid = false;
    }
}
__decorate([
    observable,
    __metadata("design:type", Object)
], SignupStore.prototype, "email", void 0);
__decorate([
    observable,
    __metadata("design:type", Object)
], SignupStore.prototype, "emailError", void 0);
__decorate([
    observable,
    __metadata("design:type", Object)
], SignupStore.prototype, "isValid", void 0);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SignupStore.prototype, "emailOnChange", null);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SignupStore.prototype, "validateEmail", null);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SignupStore.prototype, "validateForm", null);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SignupStore.prototype, "clearStore", null);
//# sourceMappingURL=index.js.map