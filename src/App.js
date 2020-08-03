import React from 'react'

import  YedTimer from 'yed-timer'
import 'yed-timer/dist/index.css'

const App = () => {

  return <>
    <div>
      <b>Standart Kullanım</b>
      <YedTimer minute={40} second={15} />
    </div>

    <div className="mt20" >
      <b>Genişlik ve Yükseklik Değerleri ile Beraber Kullanım</b>
      <YedTimer timerWidth={500} timerHeight={250} minute={40} second={15} />
    </div>
    <div className="mt20" >
      <b>Sayaç Butonlarının Özelleştirilmesiyle Beraber Kullanım</b>
      <YedTimer resetText={"Yeniden Başlat"} startText={"Sayacı Başlat"}  stopText={"Sayacı Durdur"}  minute={40} second={15} />
    </div>
    <div className="mt20" >
      <b>Dakika ve Saniye Metinlerinin Özelleştirilmesiyle Beraber Kullanım </b>
      <YedTimer resetText={"Yeniden Başlat"} startText={"Sayacı Başlat"}  minuteText={"Dk"} secondText={"Sn"} stopText={"Sayacı Durdur"}  minute={40} second={15} />
    </div>
    </>
}

export default App
