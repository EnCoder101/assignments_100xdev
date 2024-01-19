import { useState } from 'react'
import './App.css'

function App() {
  

  return (
    <div class="main-container"> 
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

function Card(){
  return(
  <div class="container">
    <div class="border">
      <h1 class="name">Name</h1>
      <div class="description">It is a Description</div>
      <div class="interest-container">
        <div class="interest-header">Interests</div>
        <div class="interest">Interest 1</div>
        <div class="interest">Interest 2</div>
        <div class="interest">Interest 3</div>

      </div>
      <div class="social-media">
        <button class="linkedin">Linkedin</button>
        <button class="twitter">Twitter</button>
      </div>
    </div>
  </div>    
  )
}

export default App
