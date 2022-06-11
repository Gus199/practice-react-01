import React from 'react'
import {Link} from 'react-router-dom'
import Card from './shared/Card'

function AboutThisPage() {
  return (
      <Card>
     <h1>About this Project</h1>
     <h2>This is a react app to leave feedback for product or service</h2>
     <p>Version: 0.0.1</p>
     <Link to='/'>Back To Home</Link>
    </Card>
  )
}

export default AboutThisPage