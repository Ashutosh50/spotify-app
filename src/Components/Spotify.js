import React, { useEffect ,useRef, useState} from 'react'
import styled from "styled-components"
import Sidebar from './Sidebar'
import Body from './Body'
import Navbar from './Navbar'
import Footer from './Footer'
import { useStateProvider } from '../Utils/StateProvider'
import axios from 'axios'
import { reducerCases } from '../Utils/Constants'
const Spotify = () => {
  const [{token},dispatch]=useStateProvider();

  const bodyref=useRef();
  const [navbackground, setNavBackground]=useState(false)
  const [headerbackground, setHeaderBackground]=useState(true)

  const bodyScrolled = () => {
    bodyref.current.scrollTop >= 30
      ? setNavBackground(true)
      : setNavBackground(false);
    bodyref.current.scrollTop >= 268
      ? setHeaderBackground(true)
      : setHeaderBackground(false);
  };

  useEffect(() => {
    const getUserInfo = async () => {
      const  { data } = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      // console.log(data)
      const userInfo = {
        userId: data.id,
        // userUrl: data.external_urls.spotify,
        name: data.display_name,
        image:data.images[0].url
      };
      //  console.log(userInfo)
      dispatch({ type: reducerCases.SET_USER, userInfo });
    };
    getUserInfo();
  }, [dispatch, token]);

  return (
    <Container>
        <div className="spotify__body">
            <Sidebar/>
          <div className="body" ref={bodyref} onScroll={bodyScrolled}>
              <Navbar navbackground={navbackground}/>
            <div className="body__content">
                <Body headerbackground={headerbackground}/>
            </div>
          </div>
        </div>
        <div className="spotify__footer">
          <Footer/>
        </div>
    </Container>
  )
}
 
export default Spotify;

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
      &::-webkit-scrollbar {
        width: 0.7rem;
        max-height: 2rem;
        &-thumb {
          background-color: rgba(255, 255, 255, 0.6);
        }
      }
    }
  }
`