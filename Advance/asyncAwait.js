function fatchUserdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({name: "rohit" , url: "https://youtube.com"})
        }, 3000)
    })
}

async function getUserData() {
    try {
        console.log('Fetcing user Data...');
        const userdata = await fatchUserdata() // await is only used when you hav easync over the function
        console.log("Userdata:", userdata);
        
    } catch (error) {
       console.log("errro fatchin data" , error);
        
    }   
}
getUserData();