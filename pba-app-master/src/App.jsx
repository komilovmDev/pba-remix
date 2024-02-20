import React, { useState } from 'react';
import './App.css';
import Landing from './Page/landing/Landing';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Chose from './Page/Choose/Choose';
import ChoseFamale from './Page/ChoseFamale/ChoseFamale';
import './animation/animation.css'
import Result from './Page/Results/Results';
import End from './Page/EndPage/End';
import LoaderPhoto from './Page/Loader/LoaderPhoto';
import Images from './Page/images/Images';
import UplodeFace from './Page/uplodeFace/UplodeFace';

function App() {

  const [isOpenEnd, setIsOpenEnd] = useState(false)
  const [isOpenLoader , setIsOpenLoader] = useState(false)


  const navigate = useNavigate()
  function endPageTimeout() {
    setIsOpenEnd(true)
    setTimeout(() => {
      navigate('/chose')
      setTimeout(() => {
        setIsOpenEnd(false)
      }, 1000);
    }, 3000);
  }
  function LoaderPageTimeout() {
    setIsOpenLoader(true)
    setTimeout(() => {
      navigate('/Results')
      setTimeout(() => {
        setIsOpenLoader(false)
      }, 1000);
    }, 2000);
  }
  return (
    <>
      <div className="App">
        {isOpenEnd && <End />}
        {isOpenLoader && <LoaderPhoto/>}
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/Chose' element={<Chose LoaderPageTimeout={LoaderPageTimeout} />} />
          <Route path='/image' element={<Images />} />
          {/* <Route path='/Chose/Famale' element={<ChoseFamale />} /> */}
          <Route path='/Results' element={<Result endPageTimeout={endPageTimeout}/>} />
          <Route path='/uplodeface' element={<UplodeFace />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

