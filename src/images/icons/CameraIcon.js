import React from 'react'
import Svg, { Path,Pattern,Use,Image,Defs,Rect,Circle} from "react-native-svg"

const CameraIcon = (props) =>{

    return(
     
        <Svg
        width={41}
        height={41}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
      >
        <Path fill="url(#a)" d="M0 0h41v41H0z" />
        <Defs>
          <Pattern
            id="a"
            patternContentUnits="objectBoundingBox"
            width={1}
            height={1}
          >
            <Use xlinkHref="#b" transform="scale(.0125)" />
          </Pattern>
          <Image
            id="b"
            width={80}
            height={80}
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAMNQTFRFAAAA////////////////////////////////////////////////////////////////7Ob+zsH8xLX8sZz72M399fP+u6n8imv5bUf4Yzr3gF/4nYT6d1P4lHf67Of+6+f+////2M79sZ37p5D7p5D66+b+bUb3gF/5noT6u6j7////uqj7////qJH7lHj64tr+4tr9xbX8nYP6xbb8bUb4lHj5zsH9zsL9d1L49fP/////z8L9p5H7u6n7gF749fL+Sg7WoQAAAEF0Uk5TABAwYIBAUI/P/++/358gf2//////////////////////r////////////5D/cP////////////////+g///////yAsaHAAADQUlEQVR4nO2Ya1/aMBSHgVJdKOBoudQOnBYpIiiwjW3Cpnz/T7WetOklOUkT2N7s5/9dS3w8t5zTpFZ717tA9YZlNUGW3TgfdnH5gRTUcpr2GTjbaRFR7U73NOOuMFoi5wQzP+a4nuv1Qe5gmCMNrbRZ5Hoj/zrI9WnsMqiR45fJ3wxHfiBqPEhjqe1310lw/WsEB5p4CfJKk9emq0cyHOjmM11zqcNr0GzcYs4W1afEu3q1fZQXqsxL5FMjHT1/R5U4iCQldtS8OuVNdXiMqM5Mx4DHiKrqsbT9LRBb8sTQAN7q8+LM0FQrHR5OTIDBvcrpBvx4b8QLgoGidhxTh0HUaUtuYNUGEeVJTYQIhsa8YCKLYldhoB/SneuhCRtI9oslj+CM9elojv03SS060hRPoqzzo0U/xH2G9Q8ocJFPpyFm4mP8w1Lg2VKPCwYSspL43BaATxB0ZPHzqsgjxJ2u+dTM4b0AvMNCOHcJouiZW7bBgA5WNNvMLh+UjWWO+AUDQufnfcmzsabPmb3D8ro+BoR1vIFh7qXreV7+yK38qgssp6OoaiBsvOifA8O/DcyLJlrPg8m3s4EZIUryvzg3KRnQ519oAncccMoMZC/WOHCGAWGC8oXNgFkfn+DARwwIe/k7B2Qx27IXPg78gQGXRGwOWRJYF1ylz9zWQ5sDtK+fHDAzyE09ZpVerocXggFhiO5lQLKC8PrZztmWlo0JOkhbROhfWQ5iJ0Nvmz+Vpy1MZnEE1A5EmEFzItGv0jLJkIKhsucqUbaZF7zH4khJfebyvMZ55Zz0iOTDuCkszUu7zCtNW5o59FRVBxN/B6aSGpjUNh/FSo2lBqYmvprxXhQGJlE0/EL0FAamp5T9iwGPHtCaMl76ERvph5GWFVqDTNAiyEaX+HYEnvogfjAgUh65UPJqdXo3EOnEcXGsCGCJWJ3rV6LFY8SqE+TbRpcXE++SHbuQ43bJHm/hBx5RTaJE7qY0eqStfxVmt1PkTMyOP0pwOvcNBbeXrFdtRjdZt9o9zLyUZnBrk6p7KHTAXhird8xftJom5mHIkk7CUaTlILTlOTeItfrFsnCJ2O48nUXLTbVjdU+7h3zX/6c/A28fzQvYPwMAAAAASUVORK5CYII="
          />
        </Defs>
      </Svg>
    )

}

export default CameraIcon