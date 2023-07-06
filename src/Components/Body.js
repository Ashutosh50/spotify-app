import React, { useEffect } from 'react'
import { AiFillClockCircle } from "react-icons/ai";
import styled from "styled-components"; 
import { useStateProvider } from './../Utils/StateProvider';
import axios from 'axios';
import { reducerCases } from '../Utils/Constants';
const Body = () => {
  const [{ token, selectedPlaylist, selectedPlaylistId }, dispatch] = useStateProvider();

  useEffect(()=>{
    const getInitialPlaylist  = async() =>{
       console.log(selectedPlaylistId);
      const response = await axios.get(
        `https://api.spotify.com/v1/playlists/${selectedPlaylistId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      const selectedPlaylist = {
        id: response.data.id,
        name: response.data.name,
        description: response.data.description.startsWith("<a")
          ? ""
          : response.data.description,
        image: response.data.images[0].url,
        tracks: response.data.tracks.items.map(({ track }) => ({
          id: track.id,
          name: track.name,
          artists: track.artists.map((artist) => artist.name),
          image: track.album.images[2].url,
          duration: track.duration_ms,
          album: track.album.name,
          context_uri: track.album.uri,
          track_number: track.track_number,
        })),
      };
      dispatch({ type: reducerCases.SET_PLAYLIST, selectedPlaylist });
    }
    getInitialPlaylist();
  },[dispatch,token,selectedPlaylistId])
  return (
    <Container>
      
    </Container>
  )
}

export default Body

const Container =styled.div`
`