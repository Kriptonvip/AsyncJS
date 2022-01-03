const getTodos = (resource) => {
    return new Promise ((resolve, reject)=> {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText)
                resolve(data);
            } else if (request.readyState === 4) {
                reject('Could not fetch the data');
            }
        });

request.open('GET', resource);
request.send();
    })
    
}

getTodos('json/luigi.json').then(data => {
    console.log('resolve 1:',data);
    return getTodos('json/mario.json');
}).then(data => {
    console.log('resolve 2:', data);
    return getTodos('json/shaun.json');
}).then(data => {
    console.log('resolve 3:', data);
}).catch(err => console.log(err));

