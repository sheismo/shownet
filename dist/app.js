// const { content } = require('../tailwind.config')

//CODE FOR DUMMY LOGIN/LOGOUT FUNCTIONALITY
const login = document.querySelector('#login')
const logout = document.querySelector('#logout')
const loginForm = document.querySelector('#loginForm')
const loginButton = document.querySelector('#loginButton')
const modal = document.querySelector('#modal')
let welcomeText = document.querySelector('#welcomeText')

loginButton.addEventListener('click', () => {
    let userName =  loginForm.elements[0].value
    if(userName){
        modal.classList.add('hidden')
        modal.classList.remove('flex')
        welcomeText.innerHTML = `Welcome, ${userName}` 
        login.classList.toggle('hidden')
        logout.classList.toggle('hidden') 
        loginForm.elements[0].value = ''
    } else{
        alert('Please Enter Your Name Boss')
    }
})

login.addEventListener('click', () => {
    modal.classList.remove('hidden')
    modal.classList.add('flex')
})

logout.addEventListener('click', () => {    
    welcomeText.innerHTML = 'Welcome, User'
    login.classList.toggle('hidden')
    logout.classList.toggle('hidden') 
})

//CODE FOR COLLECTING ALL TAILWIND CLASSES APPLICABLE TO THE ELEMENTS IN THEIR RESPECTIVE ARRAYS
const mainDivClasses = ['w-full', 'md:w-2/5', 'my-3', 'md:mx-2', 'p-4', 'flex', 'items-center', 'bg-purple', 'rounded']
const childDiv1Classes = ['w-1/3', 'mr-4']
const childDiv2Classes = ['w-2/3', 'font-Poppins', 'border-dotted', 'border-l-midnight', 'border-l-4', 'pl-2']
const titleClasses = ['text-white', 'uppercase', 'mb-2']
const genreClasses = ['text-green', 'text-sm', 'mb-2']
const summaryClasses = ['text-gray-300', 'text-xs', 'mb-2', 'text-clip']
const ratingsClasses = ['text-yellow-300', 'text-sm', 'mb-1']
const languageClasses = ['text-tahiti', 'text-sm', 'mb-1']
const statusClasses = ['text-red', 'text-sm', 'mb-1']
const websiteClasses = ["text-midnight", "text-xs", "hover:underline"]

//CODE FOR COLLECTING ALL LETTERS OF THE ALPHABET IN AN ARRAY
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

//CODE TO COLLECT USER INPUT AND MAKE AN API CALL WITH THE SEARCHTERM
const searchForm = document.querySelector('#searchForm')
let alert = document.getElementById('alert')
searchForm.addEventListener('submit', async function (e) {
    e.preventDefault()
    try{
        const searchTerm = searchForm.elements.search.value
        const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
        if (res.data.length){
            movieContent.innerHTML = ''
            createMovie(res.data)
        } else {           
            alert.innerHTML = 'No matches found!'
            alert.classList.remove('hidden')
            setTimeout(() => {alert.classList.add('hidden')}, 2000)
        }
        searchForm.elements.search.value = ''
    } 
    catch(err){
        alert.innerHTML = err.message + '!'
        alert.classList.remove('hidden')
        setTimeout(() => {alert.classList.add('hidden')}, 2000)
    }
})

//CODE TO MAKE API CALL WHEN NAV LINKS ARE CLICKED
const romance = document.getElementById('romance')
romance.addEventListener('click', async function (e) {
    // e.preventDefault()
    try{
        const res = await axios.get('https://api.tvmaze.com/search/shows?q=love')
        const res2 = await axios.get('https://api.tvmaze.com/search/shows?q=romance')
        const res3 = await axios.get('https://api.tvmaze.com/search/shows?q=sex')
        movieContent.innerHTML = ''
        createMovie(res.data)
        createMovie(res2.data)   
        createMovie(res3.data)       
    } catch(err){
        alert.innerHTML = err.message + '!'
        alert.classList.remove('hidden')
        setTimeout(() => {alert.classList.add('hidden')}, 2000)
    }
}) 

const popular = document.getElementById('popular')
popular.addEventListener('click', async function (e) {
    // popular.classList.add('text-yellow-300')
    try{
        const res = await axios.get('https://api.tvmaze.com/search/shows?q=popular')
        movieContent.innerHTML = ''
        createMovie(res.data)          
    } catch(err){
        alert.innerHTML = err.message + '!'
        alert.classList.remove('hidden')
        setTimeout(() => {alert.classList.add('hidden')}, 2000)
    }
}) 

const action = document.getElementById('action')
action.addEventListener('click', async function (e) {
    try{
        const res = await axios.get('https://api.tvmaze.com/search/shows?q=action')
        movieContent.innerHTML = ''
        createMovie(res.data)          
    } catch(err){
        alert.innerHTML = err.message + '!'
        alert.classList.remove('hidden')
        setTimeout(() => {alert.classList.add('hidden')}, 2000)
    }
}) 

const comedy = document.getElementById('comedy')
comedy.addEventListener('click', async function (e) {
    try{
        const res = await axios.get('https://api.tvmaze.com/search/shows?q=comed')
        const res2 = await axios.get('https://api.tvmaze.com/search/shows?q=laugh')     
        movieContent.innerHTML = ''
        createMovie(res.data)
        createMovie(res2.data)           
    } catch(err){
        alert.innerHTML = err.message + '!'
        alert.classList.remove('hidden')
        setTimeout(() => {alert.classList.add('hidden')}, 2000)
    }
}) 

const horror = document.getElementById('horror')
horror.addEventListener('click', async function (e) {
    try{
        const res = await axios.get('https://api.tvmaze.com/search/shows?q=horror')
        const res2 = await axios.get('https://api.tvmaze.com/search/shows?q=haunted')    
        movieContent.innerHTML = ''
        createMovie(res.data) 
        createMovie(res2.data)         
    } catch(err){
        alert.innerHTML = err.message + '!'
        alert.classList.remove('hidden')
        setTimeout(() => {alert.classList.add('hidden')}, 2000)
    }
}) 

//CODE TO MAKE API CALL WHEN WINDOW LOADS
window.addEventListener('load', async function (e) {
    try{
        const res = await axios.get('https://api.tvmaze.com/search/shows?q=city')
        createMovie(res.data) 
        for (let i = 0; i < letters.length; i++){
            const res2 = await axios.get(`https://api.tvmaze.com/search/shows?q=${letters[i]}`)
            createMovie(res2.data) 
        }        
        const res3 = await axios.get('https://api.tvmaze.com/search/shows?q=the')    
        createMovie(res3.data)         
    } catch(err){
        alert.innerHTML = err.message + '!'
        alert.classList.remove('hidden')
        setTimeout(() => {alert.classList.add('hidden')}, 2000)
    }
}) 

//CODE TO CREATE EACH CARD CONTAINING MOVIE INFORMATION AND APPEND IT TO THE CONTENT PAGE
let movieContent = document.getElementById('content')
const createMovie = (results) => {
    for (let result of results){
        if (result.show.genres && result.show.summary && result.show.rating && result.show.image 
            && result.show.officialSite && result.show.language && result.show.status) {
            const mainDiv = document.createElement('div')
            mainDiv.classList.add(...mainDivClasses)

            // Create the image div and add image to it
            const childDiv1 = document.createElement('div')
            childDiv1.classList.add(...childDiv1Classes)
            
            const image = document.createElement('img')
            image.classList.add('rounded')
            image.src = result.show.image.medium

            childDiv1.append(image) 
            
            // Create the div that holds movie info 
            const childDiv2 = document.createElement('div')
            childDiv2.classList.add(...childDiv2Classes)

            //Create the elements for title,genre, ratings, etc
            const title = document.createElement('h2')
            title.classList.add(...titleClasses)
            title.innerHTML = result.show.name

            const genre = document.createElement('p')
            genre.classList.add(...genreClasses)
            for(let i = 0; i < result.show.genres.length; i++){
                genre.innerHTML += result.show.genres[i]
                genre.innerHTML += '  '
            }

            const summary = document.createElement('p')
            summary.classList.add(...summaryClasses)
            summary.innerHTML = `&#128214;${result.show.summary.substring(0, 120)}...`

            const ratings = document.createElement('p')
            ratings.classList.add(...ratingsClasses)
            ratings.innerHTML = `Avg Rating: ${result.show.rating.average}`

            const language = document.createElement('p')
            language.classList.add(...languageClasses)
            language.innerHTML = `Language(s): ${result.show.language}`

            const status = document.createElement('p')
            status.classList.add(...statusClasses)
            status.innerHTML = `Status: ${result.show.status}`
            
            const website = document.createElement('a')
            website.classList.add(...websiteClasses)
            website.href = result.show.officialSite
            website.target = '_blank'
            website.innerHTML = 'Learn More'

            //Add the elements to the movie info div
            childDiv2.append(title, genre, summary, ratings, language, status, website)

            //Add both movie image and movie info divs to the main div; and add main div to the content Page
            mainDiv.append(childDiv1, childDiv2)
            movieContent.append(mainDiv)
        }
    }
}

