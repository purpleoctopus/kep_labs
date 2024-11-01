let resultElem = document.getElementById('result')

function asyncTask(promise){
    let loadingElem = document.getElementById('loader')

    loadingElem.style.display = 'block'
    resultElem.style.display = 'none'

    promise.then(() => {
        loadingElem.style.display = 'none'
        resultElem.style.display = 'block'
    }).catch(() => {
            loadingElem.style.display = 'none'
            resultElem.style.display = 'block'
        }
    )
}

function compareNumbers(num1, num2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num1 > num2) {
                resolve("Перше число більше");
            } else if (num1 < num2) {
                resolve("Друге число більше");
            } else {
                reject("Числа рівні");
            }
        }, 1000)
    })
}

function task4(){
    let first = parseInt(document.getElementById('first').value)
    let second = parseInt(document.getElementById('second').value)
    console.log(first)
    if(isNaN(first) || isNaN(second)){
        alert('Упс! Помилка вводу')
        document.getElementById('first').value = ''
        document.getElementById('second').value = ''
        return
    }
    let task = compareNumbers(first, second)
    task.then((result) => resultElem.innerText = result).catch((reason) => resultElem.innerText = reason)
    asyncTask(task)
}

let task = compareNumbers(5, 6)
task.then((result) => resultElem.innerText = result).catch((reason) => resultElem.innerText = reason)
asyncTask(task)

function task5(){
    function createPromiseWithDelay(delay) {
        return new Promise(resolve => {
            setTimeout(() => {
                const randomNumber = Math.floor(Math.random() * 10) + 1;
                resolve(randomNumber);
            }, delay);
        });
    }

    const promises = [
        createPromiseWithDelay(1000), 
        createPromiseWithDelay(2000), 
        createPromiseWithDelay(3000)  
    ];
    asyncTask(promises[promises.length -1])
    Promise.all(promises)
        .then(results => {
            const sum = results.reduce((total, num) => total + num, 0);
            document.getElementById("result").innerText = "Сума всіх значень: " + sum;
        })
        .catch(error => console.error("Помилка:", error));
}