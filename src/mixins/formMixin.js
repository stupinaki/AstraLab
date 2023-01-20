import {routerNames} from "@/router/routers";
import {validateEmail} from "@/helpers/validateEmail";
import {validatePassword} from "@/helpers/validatePassword";
import {authorization} from "@/helpers/authorization";

export const formMixin = {
    data() {
        return {
            routerNames,
            inputsValue: {
                email: undefined,
                password: undefined,
            },
            isBtnDisabled: true,
            isEmailOrPasswordWrong: false,
            isLoading:  false,
        }
    },
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
    methods: {
        async onSubmit() {
            this.$data.isLoading = true;
            const response = await authorization();
            this.$data.isLoading = false;

            if(response.isSuccess) {
                localStorage.setItem('userName', response.userName);
                this.$router.push('/welcome');
                return;
            }
            this.$data.isFormInvalid = true;
        },
        onInputChange(data) {
            const key = data.inputId;
            this.$data.inputsValue[key] = data.value || '';
        },
        onCloseWarning() {
            this.$data.isFormInvalid = false;
        }
    },
}