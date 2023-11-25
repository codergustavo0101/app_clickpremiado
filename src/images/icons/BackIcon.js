import React from 'react'
import Svg, { Path, Pattern, Use, Image,Defs} from "react-native-svg"

const BackIcon = (props) =>{

    return(
        <Svg
        width={43}
        height={43}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
      >
        <Path fill="url(#a)" d="M0 0h43v43H0z" />
        <Defs>
          <Pattern
            id="a"
            patternContentUnits="objectBoundingBox"
            width={1}
            height={1}
          >
            <Use xlinkHref="#b" transform="scale(.01429)" />
          </Pattern>
          <Image
            id="b"
            width={70}
            height={70}
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAPlQTFRFAAAAYED/YDj3YDjzYDj0Yjn2Yzn4Yjr3Yzr3Yzr4Yzr3Yjr3Yzr2Yjr3d1P4imv5nYP6bUb4Yzr3Yjj0u6n84tr+////9fL+2M79sZz7Yzn3p5D66+b+xLX8gF/5Yzr4sZ37noT6Yjr5Yjv47Ob+d1L4ZTX0Yjr3u6n7Yzn4p5H7nYT6ZDjz9fP/sZ384tn9YDr6lHf6gF/4dlP4Yzn1p5D7YTr2bUb3Yjr1u6j7YTn1xbX82M39uqj74dn9Yzr4zsH99fP+YEDvZDj3sZz6Yzr26+f+Yzn17Of+Yzr24tv+bUf4Yjr2Yzn5ZDr1Yzn2ZDn2ZDr3YDX0XrOxOgAAAFN0Uk5TABAgQGBwr9//z59g73//////32D///////+//////+///3+P//8wn/9v//9A////MP///1D/kP+A/6D/////r///EED/z/+g/5D//+9QgK9wgDBew0TJAAADAklEQVR4nJ2Ya3uaMBiGUUZN0YF4SBXF2W513aHdtK1z56lrO1s31/3/H7PkJYBADoTnC9dF4u3znghqGFJVquYTItOsyvdJZFoHNZTo0K7rs0y7gfI6tHRIlac8RqgDswzEcZtEruslt1qFQO0I4jU7XRzrqNd3I5CtDK3qM8agh3MaBqNw9Zklp5ihFW98lIeAuscsRTJDJwoIWAodtcSc57DBfSGBUAWnENhEQHkJlDMFJDYk4IAXj5NZjsZCDuTlVBVQmpPPzystCuO0KhlKtaFHYZyDDKZFb+pQMH5NP5Luw5OCNUpplE1PlVLeaFLw0MuEZesmJtQZ/fa3aTOBNgVjOvN+2kwJCu7t2yltJm3HKmDmXGKnkvSMwsyF946/MIp757268y7IzPI54zgqGtNURUFoxl0axlH5qpiAcjnkL9KoriiGDmWXv0dNwddkcc5S86E0BQcsOVf08VuaAslpEcyCXAelKRjTDQQzJ5eP5SnYCTGfyOVzeQqUitX7S3kKjJUU8xXOrW9ySoT5Ti4/uBuWM4oZCaYyg5HkphBnDyOqVBEOS7G0bwpwvBDTlg64knNOTxk2U5fiL1NxemymVnTbsjSnzyYcGkfUxmoOLVTdYEPVlGCkHJoaBAfwmj5wJFExzk/uEn3c3IQnQ0M8VQmHT4GY5iFmLn9wAUfwsL6NYwqjUtgR6Xj/EPfVdiRm6hGmtB1qppa83/jC40yqXsoMs9PXpSydtBnDuEOKM4+n670yhVrR3nF+aVE6lLIxUoKwZtJezuiefqKWfb/eIL2q3z+Q/dv82z78rJsW9QMU9DtHMVY3EFex/ARA+ZOnkDdJ+PHuFKkX1IhPiTjq/rl1ZRQS1w7WHf7px7TsQ0Dor4hC9Ag7kCscsAhS+yehkJcm9u+GG/Bq1mUQtMv2Sy5Bd4hpGqSyvUz+FthyCp0H+REIPbjNficIgs6g6cQ3t48qK0zrHRKqMAQcbWpciG9pQEATy9+mEDW7rcuIUGtrsbFte7NoT0oitPQfVXgxgGZf4W0AAAAASUVORK5CYII="
          />
        </Defs>
      </Svg>

    )

}

export default BackIcon