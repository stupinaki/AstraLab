
export const inputsRegular = [
    {
        id: 1,
        label: 'Full name',
        type: 'text',
        errorMessage: 'this field cannot be empty',
    },
    {
        id: 2,
        label: 'Email',
        type: 'email',
        errorMessage: 'Enter valid email',
    },
];

export const inputsPassword = [
    {
        id: 3,
        label: 'Password',
        type: 'password',
        errorMessage: 'Enter valid password',
        isHint: true,
    },
    {
        id: 4,
        label: 'Repeat password',
        type: 'password',
        errorMessage: 'Passwords do not match',
        isHint: false,
    },
];