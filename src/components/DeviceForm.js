import Card from "./share/Card"
import {useState} from 'react'
import Button from "./share/Button"
import RatingSelect from "./RatingSelect"

function DeviceForm({handleAdd}) {
    const [text, setText] =useState()
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')


    // prettier-ignore
  const handleTextChange = ({ target: { value } }) => { // 👈  get the value
    if (value === '') {
      setBtnDisabled(true)
      setMessage(null)
      
  // prettier-ignore
    } else if (value.trim().length < 10) { // 👈 check for less than 10
      setMessage('Text must be at least 10 characters')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setText(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newDevice = {
        text,
        rating,
      }
           handleAdd(newDevice)
      setText("")
    }
  }
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (text.trim().length > 10) {
  //     const newDevice = {
  //       text,
  //       rating,
  //     }
  //     handleAdd(newDevice)
  //     setText("")
  //   }
  //   }
   
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={setRating} selected={rating} />
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>

        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default DeviceForm