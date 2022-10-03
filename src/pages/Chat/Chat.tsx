import { Avatar, Button, Grid, TextField } from '@mui/material'
import { Container } from '@mui/system'

import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useContext, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from '../../App'
import { collection, addDoc, serverTimestamp, query } from 'firebase/firestore';

import Loader from '../../components/Loader';






const Chat: React.FC = () => {
   const { auth, firestore } = useContext(Context)
   const [user] = useAuthState(auth)
   const [value, setValue] = useState('')


   const [messages, loading] = useCollectionData(
      collection(firestore, 'messages')
   )


   const sendMessage = () => {
      try {
         if (value) {
            addDoc(collection(firestore, 'messages'),
               {
                  uid: user.uid,
                  displayName: user.displayName,
                  photoURL: user.photoURL,
                  text: value,
                  createdAt: serverTimestamp()
               })
            setValue('')
         } else {
            alert('Введите текст.')
         }
      } catch (e) {
         console.log(e)
         alert('Произошла ошибка')
      }
   }

   if (loading) {
      return <Loader />
   }


   return (
      <Container>
         <Grid container
            justifyContent={'center'}
            style={{ height: window.innerHeight - 50, margin: '0' }}>
            <div style={{ width: '80%', height: '60vh', border: '1px solid gray', overflowY: 'auto', marginTop: '5px', overflowX: 'clip' }}>
               {messages.sort((a, b) => a.createdAt - b.createdAt).map((message) =>
                  <div style={{
                     margin: 10,
                     border: message.uid === user.uid ? '2px solid green' : '2px dashed red',
                     marginLeft: message.uid === user.uid ? 'auto' : '10px',
                     width: 'fit-content',
                     maxWidth: '80%',
                     padding: 5
                  }}
                  >
                     <Grid container>
                        <Avatar style={{
                           marginRight: 5
                        }} src={message.photoURL} />
                        <div>{message.displayName}</div>
                     </Grid>
                     <div className='message'>{message.text}</div>
                  </div>
               )}
            </div>
            <Grid container
               direction={'column'}
               alignItems={'flex-end'}
               style={{ width: '80%' }}
            >
               <TextField
                  value={value}
                  onChange={e => setValue(e.target.value)}
                  fullWidth
                  variant={'outlined'} />
               <Button onClick={sendMessage} variant={'outlined'}>SEND</Button>
            </Grid>
         </Grid>
      </Container>
   )
}

export default Chat