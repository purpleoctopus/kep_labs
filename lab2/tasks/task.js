console.log('\nTask 1: \n')

let game = {
    name: 'Silent Hill',
    platform: 'PS/PC',
    genre: 'Survival Horror',
    year: 1999,
    isCompleted: false,
    gameInfo(){
        console.log(`Назва: ${this.name}, Платформа: ${this.platform}, Жанр: ${this.genre}, Рік випуску: ${this.year}, Пройдено: ` +
            (this.isCompleted ? `Так` : `Ні`)
        )
    }
}

game.gameInfo()

game.isCompleted = !game.isCompleted

game.gameInfo()

console.log('\nTask 2: \n')

let collection = [
    {name: 'The Last Of Us', platform: 'PS3/PS4', genre: 'Survival, Action', year: 2013, isCompleted: true},
    {name: 'Silent Hill', platform: 'PS/PC', genre: 'Survival, Horror', year: 1999, isCompleted: false},
    {name: 'Heavy Rain', platform: 'PC/Xbox', genre: 'Action-adventure', year: 2010, isCompleted: true}
]

function displayCollection(){
    collection.forEach(elem => console.log(`Назва: ${elem.name}, Платформа: ${elem.platform}, ` + 
        `Жанр: ${elem.genre}, Рік випуску: ${elem.year}, Пройдено: ` +
        (elem.isCompleted ? `Так` : `Ні`)
    ))
}

displayCollection()

collection.push({name: 'DotA2', platform: 'PC', genre: 'MOBA', year: 2012, isCompleted: true})

displayCollection()

console.log('\nTask 3: \n')

collection.sort((a, b) => a.year - b.year)
console.log('Відсортовані ігри за роком випуску: ')

displayCollection()

let uncompletedGames = collection.filter(game => !game.isCompleted)
console.log('Непройдені ігри: ', uncompletedGames)

let survivalGame = collection.find(game => game.genre.toLowerCase().includes('action'))
console.log('Action-гра: ', survivalGame)

console.log('\nTask 4: \n')

function addGameToCollection(){
    let name = prompt('Введіть назву гри: ')
    if(name === null || name.length === 0){
        alert('Назва гри некоректна! Скасовано додавання в колекцію.')
        return
    }
    let platform = prompt('Введіть платформи, на які доступна гра: ')
    if(platform === null || platform.length === 0){
        alert('Платформу гри введено некоректно! Скасовано додавання в колекцію.')
        return
    }
    let genre = prompt('Введіть жанр гри: ')
    if(genre === null || genre.length === 0){
        alert('Жанр гри введено некоректно! Скасовано додавання в колекцію.')
        return
    }
    let year = +prompt('Введіть рік випуску: ')
    if(year === null || year === 0 || !Number.isInteger(year)){
        alert('Рік випуску гри введено некоректно! Скасовано додавання в колекцію.')
        return
    }
    let completed = confirm('Чи пройдена вами ця гра?')

    collection.push({name,platform,genre,year,completed})
    displayCollection()
}

addGameToCollection()