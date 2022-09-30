import './Waitforit.scss'

const Waitforit = () => {

    const Headie = new URL('../images/Headie.png', import.meta.url)
    const Pic1 = new URL('../images/Pic1.jpg', import.meta.url)
    const Pic2 = new URL('../images/Pic2.jpg', import.meta.url)
    const Pic3 = new URL('../images/Pic3.jpg', import.meta.url)
    const Pic4 = new URL('../images/Pic4.jpg', import.meta.url)

  return (
    <div>
        <img src={Pic1} alt="" className='pic1'></img>
        <img src={Pic2} alt="" className='pic2'></img>
        <img src={Pic3} alt="" className='pic3'></img>
        <img src={Pic4} alt="" className='pic4'></img>
        <p className='comingsoon'>COMING SOON</p>
        <img src={Headie} alt="" className='headie'></img>
    </div>
  )
}

export default Waitforit
