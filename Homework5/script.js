'use strict';

function createNewUser() {
    let userfirstName;
    let userlastName;
    let userBirthday;

    do {
        userfirstName = prompt('Enter first name:');
    } while ((userfirstName === "") || (userfirstName === null) || (isNaN(userfirstName) === false));

    do {
        userlastName = prompt('Enter last name:');
    } while ((userlastName === "") || (userlastName === null) || (isNaN(userlastName) === false));

    do {
        userBirthday = prompt('Enter data your Birthday:', 'dd.mm.yyyy');
    } while ((userlastName === "") || (userlastName === null));

    let newUser = {
        firstName: userfirstName,
        lastName: userlastName,
        birthday: userBirthday
    };

    Object.defineProperty(newUser, 'firstName', {
        writable: false,
        value: userfirstName,
    });

    Object.defineProperty(newUser, 'lastName', {
        writable: false,
        value: userlastName,
    });

    newUser.getLogin = function(){
        console.log(`${newUser.firstName[0].toLowerCase()}${newUser.lastName.toLowerCase()}`)
    };

    newUser.getPassword = function(){
        console.log(`${newUser.firstName[0].toUpperCase()}${newUser.lastName.toLowerCase()}${(newUser.birthday[6] + newUser.birthday[7] + newUser.birthday[8] + newUser.birthday[9])}`)
    };

    newUser.getAge = function(){
        let nowdata = new Date();
        let nowyear = nowdata.getFullYear();
        let nowmonth = nowdata.getMonth();
        let nowday = nowdata.getDate();

        let useryear = newUser.birthday[6] + newUser.birthday[7] + newUser.birthday[8] + newUser.birthday[9];
        let usermonth = newUser.birthday[3] + newUser.birthday[4];
        let userday = newUser.birthday[0] + newUser.birthday[1];

        let age;

        if ((nowmonth>usermonth) || (usermonth === nowmonth && nowday>userday)) {
            age = +nowyear - +useryear;
        } else {
            age = +nowyear - +useryear - 1;
        }
        console.log(age);
    };

    newUser.getAge();
    newUser.getLogin();
    newUser.getPassword();
}

createNewUser();