import axios from 'axios';
import { useState, useEffect } from 'react';

export const DogImg = () => {
  const [dogImg, setDogImg] = useState(null);

  const boxStyle={
    textAlign: "center",
    margin: "0 auto"
  }
  const imgStyle={
    width: "500px",
    height: "500px"

  }
  useEffect(() => {
    fetchDogImg();
  }, [])

  const fetchDogImg = async () => {


    try {
      const url = `https://dog.ceo/api/breeds/image/random`

      const response = await axios.get(url);

      setDogImg(response.data.message)
      console.log(dogImg)

    } catch (err) {
      setError('データの取得に失敗しました。');
    } finally {
     
    }
  };


  const onClickButton = () => {
    fetchDogImg();
  console.log('ボタン');
  }
  return (
    <>
    <div style={boxStyle}>
       

      <img src={dogImg} alt='わんこ' style={imgStyle}/>
      <br />
      <button onClick={onClickButton}>🐕もう一度🐕</button>
    </div>
     
    </>
  )
}
