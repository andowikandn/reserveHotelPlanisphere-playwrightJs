export const signupUser = {
    invalid: {
        email: 'test1.com',
        password: 'pass',
        pwdConfirm: 'typo'
    },

    valid: {
        email: 'test2@mail.com',
        password: 'password2',
        pwdConfirm: 'password2'
    },

    username: {
        name: 'test2 user'
    },

    tel: {
        invalid: '13245',
        valid: '08081234560'
    },

    dateOfBirth: {
        date: '1995-08-20'
    },

    address: {
        place: 'Complex GoGreen Residence'
    },

    gender: {
        opt: [
            'I do not answer', 
            'male', 
            'female',
            'other'
        ],
        selected: 'male' 
    }
}

