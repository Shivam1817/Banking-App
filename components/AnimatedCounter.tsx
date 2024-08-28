'use client'
import CountUp from "react-countup"

const AnimatedCounter = ({amount}: {amount : number}) => {
  return (
    <div className="">
        <CountUp 
            duration={1.5}
            decimals={2}
            decimal="."
            prefix="$"
        end = {amount}></CountUp>
    </div>
  )
}

export default AnimatedCounter