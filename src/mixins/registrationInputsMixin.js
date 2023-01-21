import {authorizationInputsMixin} from "@/mixins/authorizationInputsMixin";
import {checkName} from "@/helpers/checkName";
import {comparePasswords} from "@/helpers/comparePasswords";

export const registrationInputsMixin = {
    mixins: [authorizationInputsMixin],
    computed: {
        isFullNameValid() {
            return checkName(this.$data.inputsValue.fullName);
        },
        isPasswordRepeatMatch() {
            const {password, passwordRepeat} = this.$data.inputsValue;
            return comparePasswords(password, passwordRepeat);
        },
        isNeedErrorMessageForPasswordRepeat() {
            const password = this.$data.inputsValue.passwordRepeat;
            const isDidNotTouch = password === undefined;
            if(isDidNotTouch || this.isPasswordRepeatMatch) {
                return '';
            }
            return 'Passwords do not match';
        },
        isNeedErrorMessageForFullName() {
            const fullName = this.$data.inputsValue.fullName;
            const isDidNotTouch = fullName === undefined;
            if(isDidNotTouch || this.isFullNameValid) {
                return '';
            }
            return 'this field cannot be empty';
        },
    },
}