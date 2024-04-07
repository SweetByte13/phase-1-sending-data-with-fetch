// Add your code here




function submitData(userName, userEmail) {

    

    const formData = {
        name: "",
        email: "",
    };
    formData.name = userName;
    formData.email = userEmail;

    const postData = {
        method: "POST",
        headers: {
            "content-Type": "application/json",
            "accept": "application/json",
        },
        body: JSON.stringify(formData),
    };
    // object with name email 

    return fetch("http://localhost:3000/users", postData)
        .then(
            function (resp) {
                return resp.json()
            })
        .then(function (a) {
            const userID = a.id;
            const h = document.createElement("h1");
            h.innerHTML = userID;
            document.body.appendChild(h);

        })
.catch(function(errorMes) {
    const message = errorMes.message;
    const h = document.createElement("h1");
    h.innerHTML = message;
    document.body.appendChild(h);
}

);
}




        