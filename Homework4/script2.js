'use strict';

function createNewUser() {
    let userfirstName;
    let userlastName;

    do {
        userfirstName = prompt('Enter first name:');
    } while ((userfirstName === "") || (userfirstName === null) || (isNaN(userfirstName) === false));

    do {
        userlastName = prompt('Enter last name:');
    } while ((userlastName === "") || (userlastName === null) || (isNaN(userlastName) === false));

    let newUser = {
        firstName: userfirstName,
        lastName: userlastName,
    };

    Object.defineProperty(newUser, 'firstName', {
        writable: false,
        value: userfirstName,
        // get: function() {
        //     return this.firstName;
        // },
        // set: function (setFirstName) {
        //     this.firstName = setFirstName;
        // }
    });

    Object.defineProperty(newUser, 'lastName', {
        writable: false,
        value: userlastName,
        // get: function() {
        //     return this.lastName;
        // },
        // set: function (setLastName) {
        //     this.lastName = setLastName;
        // }
    });

    newUser.getLogin = function(){
        console.log(`${newUser.firstName[0].toLowerCase()}${newUser.lastName.toLowerCase()}`)
    };

    newUser.getLogin();
}

createNewUser();

