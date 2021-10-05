const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({'message':'resolved promise!'});
        }, 500);
    });
}
// I added promise method to resolve the promise

const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({'error': 'rejected promise!'});
        }, 500);
    });
}
// I added reject method to reject the promise

resolvedPromise().then(res => console.log(res))
rejectedPromise().catch(err => console.log(err))