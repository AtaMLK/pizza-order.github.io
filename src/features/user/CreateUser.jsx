import { useState } from 'react';
import Button from '../../UI/Button';
<<<<<<< HEAD
import { useDispatch } from 'react-redux';
import { updateName } from './userSlice';
import { useNavigate } from 'react-router-dom';
=======
>>>>>>> e728c5e1ea7a969074703b7d22afe771094b0a48

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();

    if(!username ) return
    dispatch(updateName(username))
    navigate('/menu')
  }

  return (
    <form onSubmit={handleSubmit} >
      <p className='mb-4 text-sm text-stone-600 md:text-base'>👋 Welcome! Please start by telling us your name:</p>

      <input
<<<<<<< HEAD
      className="input w-72 mb-8"
=======
      className="input w-72 "
>>>>>>> e728c5e1ea7a969074703b7d22afe771094b0a48
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== '' && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
