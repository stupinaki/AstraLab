import {validateEmail} from "@/helpers/validateEmail";
import {validatePassword} from "@/helpers/validatePassword";

export const authorizationInputsMixin = {
    computed: {
        isEmailValid() {
            return validateEmail(this.$data.inputsValue.email);
        },
        isPasswordValid() {
            return validatePassword(this.$data.inputsValue.password);
        },
        isNeedErrorMessageForEmail() {
            const email = this.$data.inputsValue.email;
            const isDidNotTouch = email === undefined;
            if(isDidNotTouch || this.isEmailValid) {
                return '';
            }
            return 'Enter valid email';
        },
        isNeedErrorMessageForPassword() {
            const password = this.$data.inputsValue.password;
            const isDidNotTouch = password === undefined;
            if(isDidNotTouch || this.isPasswordValid) {
                return '';
            }
            return 'Enter valid password';
        },
    },
}