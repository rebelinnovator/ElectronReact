import React from 'react';

const coinHeight = 10;
const coinWidth= 50;
const maxCount=45;

export default  (props): JSX.Element => {
    const { item, idx , betweenImg , y} = props;
    const coinImg=[];
    let count=item.value;
    if(count>maxCount) count=maxCount;
    for (let i = 0; i < count; i++) {
      coinImg.push(<image
        key={item.coin+"-"+item.value+"-"+i}
        xlinkHref={item.coinImg}
        width={coinWidth}
        height={coinHeight}
        transform={`translate(${15+idx*betweenImg},${y-coinHeight-i*8})`}
      />)

    }
    // Though "xlinkHref" is deprecated it is used because Safari does not support "href".
    return (
      <React.Fragment>
        {
          coinImg.map((ele)=>ele)
        }
      </React.Fragment>
    );
};

