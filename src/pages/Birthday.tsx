import { BirthdayCard } from '../components/BirthdayCard'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import "./Birthday.css"

const Birthday = () => {
  const { width, height } = useWindowSize();

  const paragraph = [
  'Happy birthday 💖💖 !! I hope your day is filled with lots of love and'+'laughter! May all of your birthday wishes come true.', 
  'Happy Birthday! 🎉 Wishing you a day filled with laughter, surrounded by the warmth of loved ones.',
  'May your birthday be as special as you are! Here is to another amazing year ahead.'
  ]

  return (
    <div className='upper-wrapper'>
         <Confetti
          width={width}
          height={height}
        />
      <div className="birthday-card-wrapper">
          <BirthdayCard paragraph={paragraph[0]}/>
          <BirthdayCard paragraph={paragraph[1]}/>
          <BirthdayCard paragraph={paragraph[2]}/>
    </div>
  </div>
  )
}

export default Birthday
