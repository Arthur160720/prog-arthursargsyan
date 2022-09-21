let email = document.querySelector('#email');
let password = document.querySelector('#password');
let loginForm = document.querySelector('#login-form');
let printUsers = document.querySelector('#printUsers');
let error = document.querySelector('.error');

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        email: email.value,
        password: password.value
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

//     fetch("http://localhost:3000/signup", requestOptions)
//         .then(response => response.json())
//         .then(result => {
//             if (result?.error?.message === "email already exists") {
//                 error.innerHTML = result.error.message;
//             } else {
//                 let item = document.createElement('div');
//                 item.innerHTML += email.value + ' ' + password.value;
//                 printUsers.appendChild(item);
//                 error.innerHTML = '';
//             }
//         })
//         .catch(error => console.log('error', error));
// });
//
// fetch("http://localhost:3000/users").then(res => res.json()
//     .then(result => {
//         for (let i = 0; i < result.length; i++) {
//             let item = document.createElement('div');
//             item.innerHTML += result[i].email + ' ' + result[i].password;
//             printUsers.appendChild(item);
//         }
//     }));

    async function getData() {
        try {
            let response = await fetch("http://localhost:3000/signup", requestOptions);
            let data = await response.json();
            if (data?.error?.message === "email already exists") {
                error.innerHTML = data.error.message;
            } else {
                let item = document.createElement('div');
                item.innerHTML += email.value + ' ' + password.value;
                printUsers.appendChild(item);
                error.innerHTML = "";
            }
        } catch (err) {
            console.log(err);
        }
    }

    getData();
});


async function getUsersData() {
    try {
        let response = await fetch("http://localhost:3000/users");
        let data = await response.json();
        // data.map(el => {
        //         let item = document.createElement('div');
        //         item.innerHTML += el.email + ' ' + el.password;
        //         printUsers.appendChild(item);
        //});
        for (let i = 0; i < data.length; i++) {
            let item = document.createElement('div');
            item.innerHTML += data[i].email + ' ' + data[i].password;
            printUsers.appendChild(item);
        }
    } catch (err) {
        console.log(err);
    }
}

getUsersData();
