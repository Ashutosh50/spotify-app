import React, { useEffect } from 'react'
import styled from "styled-components"
import Sidebar from './Sidebar'
import Body from './Body'
import Navbar from './Navbar'
import Footer from './Footer'
import { useStateProvider } from '../Utils/StateProvider'
import axios from 'axios'
const Spotify = () => {
  const [{token},dispatch]=useStateProvider()
  useEffect=(()=>{
    const getUserinfo = async ()=>{
      const { data } = await axios.get("https://api.spotify.com/v1/me",
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      })
    }
  },[token,dispatch])

  return (
    <Container>
        <div className="spotify__body">
            <Sidebar/>
          <div className="body">
              <Navbar/>
            <div className="body__content">
                <Body/>
            </div>
          </div>
        </div>
        <div className="spotify__footer">
          <Footer/>
        </div>
    </Container>
  )
}
 
export default Spotify

const Container =styled.div`
max-width: 100vw;
max-height: 100vh;
overflow: hidden;
display: grid;
grid-template-rows: 85vh 15vh;
.spotify__body {
  display: grid;
  grid-template-columns: 15vw 85vw;
  height: 100%;
  width: 100%;
  background: linear-gradient(transparent, rgba(0, 0, 0, 1));
  background-color: rgb(32, 87, 100);
   .body {
      height: 100%;
      width: 100%;
      overflow: auto;
`