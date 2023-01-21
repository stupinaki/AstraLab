import {authorization} from "@/helpers/authorization";

export const formMixin = {
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