import React from 'react'
import Svg, { Path, Pattern, Use, Image,Defs} from "react-native-svg"

const YoutubeIcon = (props) =>{

    return(
     
     
        <Svg
        width={27}
        height={27}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
      >
        <Path fill="url(#a)" d="M0 0h27v27H0z" />
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
            width={108}
            height={108}
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAQMAAAD58POIAAAAAXNSR0IB2cksfwAAAAlwSFlzAAADigAAA4oBp4z1HwAAAAZQTFRFAAAA////pdmf3QAAAAJ0Uk5TAP9bkSK1AAABjElEQVR4nIWWwZHDIAxF8fjAbSmBUiiNlJZSUkKOOXisBYyQ9LVZ50Sexw8M4kMIIVGwv0JPC4je5v9GdBiwE1lJbOChQWrgpUEmsHZgrIXAOoC21jNaaz3a0D4afEI11vruGgXaIJKxNuFurK1trf2hsXaQtbWDZn0aYKy9aazjmbYOoK0DaOsA2jpa2no9qnRaoKwXUNYLKOtsiHUCsU4g1gnEOsG+lpzty8pgWRksK4PIVgbLKkOe1gXYukCeS74AWxdgq5rdyyqgXFYBc6wCplXAnFddCKMbBQqCPPpVII4qUWBDEBwoJ4CMIN0DAhBvgXvFg9uBuaFXAO7z3QQlnEI3ybgMGy6UW8pZQv+Uw8yzBTYsKVd0riwLFi5n5Nfid9uDnQsU3GK4Cd02jbiR3VZ3YYBxIc5vkeNCycUWBpuLPheOLj6LODlxIYIxpAPGeMCgD3gU9FNHQP/s+gJQHgJqBz9BAX2CDXAgOKM9kYs99gawL+VbkBDEP455Czbs1l0V/GXCXjd+AdXD+A65cDDeAAAAAElFTkSuQmCC"
          />
        </Defs>
      </Svg>
    )

}

export default YoutubeIcon