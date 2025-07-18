function FatchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve("data fetched successfully!!");
            } else {
                reject("Error fatching Data!!");
            }
        }, 3000);
    });
}

//how to consume promis:
FatchData()
    .then((data) => console.log(data))
    .catch((error)=> console.log(error))






















