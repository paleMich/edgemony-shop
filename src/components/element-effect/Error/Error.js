import './Error.css'    

function Error(setError) {
  return <p className='error'>ALLERT
      <p>Please click</p>
      <span onClick={() => !setError}>Here</span>
    </p> 
} 

export default Error