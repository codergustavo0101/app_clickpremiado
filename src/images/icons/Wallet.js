import React from 'react'
import Svg, { Path, Pattern, Use, Image,Defs} from "react-native-svg"

const WalletIcon = (props) =>{

    return(
     
        <Svg
        width={25}
        height={25}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
      >
        <Path fill="url(#a)" d="M0 0h25v25H0z" />
        <Defs>
          <Pattern
            id="a"
            patternContentUnits="objectBoundingBox"
            width={1}
            height={1}
          >
            <Use xlinkHref="#b" transform="scale(.00781)" />
          </Pattern>
          <Image
            id="b"
            width={128}
            height={128}
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAQMAAAD58POIAAAAAXNSR0IB2cksfwAAAAlwSFlzAAADsQAAA7EB9YPtSQAAAAZQTFRFAAAA////pdmf3QAAAAJ0Uk5TAP9bkSK1AAABwklEQVR4nLXWUW7DIAwAUBAf+eQIuUjUXCxac4NdCWkf+9wRhrQL8MkHKjNgEwPtsmkbUqP0tXKwYzcV4nTJWNYO58qkA4Ih0AjuIcwuh9IeDssCh3UvsUMFvFqFC8J2D3LQARaE5SGsuLEgo8+fVIAttwAntgHMpwZNH4QWhL414KF4DUDE687BaHjB1giuQgttGdwAJscgAKgDFukhgvRQogOi46BcyjYwsAk2AvXyahWk8kRBAYxyQVwOeDPKbiOsxz70riC7uSZ3F1wPgYPQzzIa3YFrQUTfwcphhj6FqLMnWFPjAgSC3MkbfPERyKhLcuAlWz+V9GdK302lQJrATqWEU4VYisyg3AYG5UapA0JqBgbdzYbyte2gPLSTFnNtGBW7lqJZTdN6BhbhncAhGGw9GN8WYHxbEANsP4fl32HKo8tg7mHt4dpD+vnjQeWtu4r0HaTuPwHbw4f5PQxBT/cxbH1Ibkh/LNBQwqHIw20Q/VX+GizBNsKKQ9CBIwgIHt9LgohA4yHqROEA5do0QA8VGsJcm7zyT44q1a2b7+CCsH0FmAQu/ngtsFMSuPgjupyxh/h94H8ESrSaxHfXJ/2BAJQ7Yv+oAAAAAElFTkSuQmCC"
          />
        </Defs>
      </Svg>
        
    )

}

export default WalletIcon