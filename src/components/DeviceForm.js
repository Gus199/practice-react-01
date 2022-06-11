import Card from "./shared/Card"
import {useState} from 'react'
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"
import {useContext, useEffect} from 'react'
import DeviceContext from "../context/DeviceContext"


function DeviceForm() {

    const [text, setText] =useState()
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

   const {addDevice,  deviceEdit, updateDevcice} = useContext(DeviceContext)
   
   useEffect(() => {
  if(deviceEdit.edit === true) {
    setBtnDisabled(false)
    setText(deviceEdit.item.text)
    setRating(deviceEdit.item.rating)

  }
   }, [deviceEdit])
  
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
      if(deviceEdit.edit === true) {
        updateDevcice(deviceEdit.item.id, newDevice)
      }else {
        addDevice(newDevice)
      }
         
      setText("")
    }
  }
  
   
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