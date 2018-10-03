var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @flow
import * as React from 'react';
import { Item, Input, Icon, Form, Toast } from 'native-base';
import { observer, inject } from 'mobx-react/native';
import language from 'language';
const { formErrors } = language;
import Signup from 'stories/screens/Signup';
let SignupContainer = class SignupContainer extends React.Component {
    signup() {
        this.props.signupForm.validateForm();
        if (this.props.signupForm.isValid) {
            this.props.userStore.createUser(this.props.signupForm.email);
            this.props.signupForm.clearStore();
            this.props.navigation.navigate('Mnemonic');
        }
        else {
            Toast.show({
                text: formErrors.email,
                duration: 2000,
                position: 'top',
                textStyle: { textAlign: 'center' },
            });
        }
    }
    render() {
        const form = this.props.signupForm;
        const Fields = (React.createElement(Form, null,
            React.createElement(Item, { error: form.emailError ? true : false },
                React.createElement(Icon, { active: true, name: 'person' }),
                React.createElement(Input, { placeholder: 'Email', keyboardType: 'email-address', ref: c => (this.emailInput = c), value: form.email, onBlur: () => form.validateEmail(), onChangeText: e => form.emailOnChange(e) }))));
        return React.createElement(Signup, { signupForm: Fields, onSignup: () => this.signup() });
    }
};
SignupContainer = __decorate([
    inject('signupForm'),
    inject('userStore'),
    observer
], SignupContainer);
export default SignupContainer;
//# sourceMappingURL=index.js.map