// Importeer het npm pakket express uit de node_modules map
import express from 'express'

// Importeer de zelfgemaakte functie fetchJson uit de ./helpers map
import fetchJson from './helpers/fetch-json.js'

// Stel het basis endpoint in


// Maak een nieuwe express app aan
const app = express()

// Stel ejs in als template engine
app.set('view engine', 'ejs')

// Stel de map met ejs templates inx
app.set('views', './views')

// Gebruik de map 'public' voor statische resources, zoals stylesheets, afbeeldingen en client-side JavaScript
app.use(express.static('public'))

// Zorgt dat werken met request data makkelijker wordt
app.use(express.urlencoded({extended: true}))


//endpoint
const storiesAPI = 'https://fdnd-agency.directus.app/items/tm_story'
const playlistsAPI = 'https://fdnd-agency.directus.app/items/tm_playlist'
const audioAPI = 'https://fdnd-agency.directus.app/items/tm_audio'
//routes 


//GET
//lessons
app.get('/', function(request, response) {
    // Render index.ejs uit de views map
  
	fetchJson( storiesAPI).then((storiesData) => {
		response.render('home')
    
	});
})

app.get('/lessons', function(request, response) {
    // Render index.ejs uit de views map
  
	fetchJson( storiesAPI).then((storiesData) => {
		response.render('index', {stories: storiesData.data})
    
	});
})


app.get('/lessons/allstories', function(request, response) {
    // Render index.ejs uit de views map
  
	fetchJson( storiesAPI).then((storiesData) => {
		response.render('stories', {stories: storiesData.data})
    
	});
})

app.get('/lessons/playlist', function(request, response) {
    // Render index.ejs uit de views map
  
	fetchJson( playlistsAPI).then((playlistData) => {
		response.render('stories', {playlist: playlistData.data})
    
	});
})

app.get('/lessons/story', function(request, response) {
    // Render index.ejs uit de views map
  
	fetchJson( storiesAPI).then((storiesData) => {
		response.render('stories', {stories: storiesData.data})
    
	});
})


// app.get('/lessons', function(request,response) {

// }


//

// Stel het poortnummer in waar express op moet gaan luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function() {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})