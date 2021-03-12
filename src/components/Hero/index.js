import './styles.css'

function Hero(props){
  return <div className='Hero'>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
    <div className='img-wrapper'>
      <img src={props.cover} alt="" />
    </div>
  </div>
}

export default Hero
