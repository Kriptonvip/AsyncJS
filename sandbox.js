// Async & Await

const 
getTodos = async () => { // любая функция с async возвращает promise, и с ним надо работать через .then
    const response = await fetch('json/luig2i.json') // await позволяет отложить следующую строку, и работать с данными от запроса дальше на вмешиваясь в поток получения, а только по завершению и ответу
    if (response.status !== 200) {
        throw new Error('Cannot fetch the data'); // ключевое слово throw создает и указывает что произошла ошибка и promise был rejected, принудительно по условию. 
    }
    const data = await response.json(); // обрабатываем запрос и преобразуем его в js объект с помощью promise метода json().
    return data;
}; 

console.log(1);
console.log(2);
getTodos()
.then(dataFromAsyncFunction => {
    console.log('resolved:', dataFromAsyncFunction);
}).catch(err => console.log('rejected', err.message));

console.log(3);
console.log(4);



//fetch exapmle Start --- --- --- --- --- --- --- 

// fetch('json/luigi.json').then(resolveOfFetchPromise => {
//     console.log('resolveOfFetchPromise = response.object', resolveOfFetchPromise);
//     return resolveOfFetchPromise.json();
//     }).then(resolveOfResponseJsonPromise => {
//         console.log(resolveOfResponseJsonPromise);
//     }).catch (err => {
//         console.log('rejected', err);
//     });

//END of fetch exapmle --- --- --- --- 

// Clean Promise Example Start --- --- --- --- 
// const getTodos = (resource) => {
//     return new Promise ((resolve, reject)=> {
//         const request = new XMLHttpRequest();

//         request.addEventListener('readystatechange', () => {
//             if(request.readyState === 4 && request.status === 200) {
//                 const data = JSON.parse(request.responseText)
//                 resolve(data);
//             } else if (request.readyState === 4) {
//                 reject('Could not fetch the data');
//             }
//         });

// request.open('GET', resource);
// request.send();
//     })
    
// }

// getTodos('json/luigi.json').then(data => {
//     console.log('resolve 1:', data);
//     return getTodos('json/mario.json');
// }).then(data => {
//     console.log('resolve 2:', data);
//     return getTodos('json/shaun.json');
// }).then(data => {
//     console.log('resolve 3:', data);
// }).catch(err => console.log(err));
