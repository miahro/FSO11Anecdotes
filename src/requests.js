import axios from 'axios'


const SERVERPORT = process.env.SERVERPORT || 3001
const baseUrl = `${window.location.protocol}//${window.location.hostname}:${SERVERPORT}/anecdotes`; 
console.log('serverport:', SERVERPORT)
console.log(`${window.location.protocol}//${window.location.hostname}:${SERVERPORT}/anecdotes`)

export const getAnecdotes = () =>
  axios.get(baseUrl).then(res => res.data)

export const createAnecdote = newNote =>
  axios.post(baseUrl, newNote).then(res => res.data)

export const updateAnecdote = updatedNote =>
  axios.put(`${baseUrl}/${updatedNote.id}`, {...updatedNote, votes: updatedNote.votes+1}).then(res => res.data)