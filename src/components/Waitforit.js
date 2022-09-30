import './Waitforit.scss'

const Waitforit = () => {

    const Headie = new URL('../images/Headie.png', import.meta.url)
    const Pic1 = new URL('../images/Pic1.jpg', import.meta.url)
    const Pic2 = new URL('../images/Pic2.jpg', import.meta.url)
    const Pic3 = new URL('../images/Pic3.jpg', import.meta.url)
    const Pic4 = new URL('../images/Pic4.jpg', import.meta.url)

  return (
    <div>
        <img src={Headie} alt="" className='headie'></img>
        <p className='comingsoon'>COMING SOON</p>
    </div>
  )
}

export default Waitforit
