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
    newUser.getLogin = function(){
        console.log(`${newUser.firstName[0].toLowerCase()}${newUser.lastName.toLowerCase()}`)
    };
    newUser.getLogin();
}

createNewUser();
