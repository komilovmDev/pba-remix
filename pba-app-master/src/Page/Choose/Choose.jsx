import './chose.css';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Famale1 from "./../../assets/img/pics for circles/1-female.png";
import Famale2 from "./../../assets/img/pics for circles/2-female.png";
import Famale3 from "./../../assets/img/pics for circles/3-female.png";
import male1 from "./../../assets/img/pics for circles/1-male.png";
import male2 from "./../../assets/img/pics for circles/2-male.png";
import male3 from "./../../assets/img/pics for circles/3-male.png";
import BadFamale from "./../../assets/img/BadGood/bad-female.png";
import GoodFamale from "./../../assets/img/BadGood/good-female.png";
import Badmale from "./../../assets/img/BadGood/bad-male.png";
import Goodmale from "./../../assets/img/BadGood/good-male.png";
import btnPhoto1 from "../../assets/img/btnPhoto1.jpg"
import btnGif from '../../assets/video/btnGif1.gif'


export default function Chose({ LoaderPageTimeout }) {


    const [ChoseFamaleStatus, setChoseFamaleStatus] = useState(false)
    const [imgBoxClass, setImgBoxClass] = useState("choseFamale__imgBox choseFamale__main")
    const navigate = useNavigate()
    const [famaleBtnClass, setFamaleBtnClass] = useState("choseMain_btns__box")
    function FamaleBtnClick() {
        setChoseFamaleStatus(true);
        setTopNumClass("topNumbers topNumber__animation")
        setFamaleBtnClass("ChoseBtn__animation")
        setImgBoxClass("choseFamale__imgBox choseFamale__main")
        if (ChoseFamaleStatus) {
            setFamaleBtnClass("choseMain_btns__box ChoseBtn__animation__R")
            setCl("choseMain_btns__box")
            setTopNumClass("topNumbers topNumber__animation__R")
            setImgBoxClass("choseFamale__imgBox choseFamale__main__R")
            setChoseFamaleStatus(false)
        }
    }


    const [ChoseMaleStatus, setChoseMaleStatus] = useState(false)
    const [cl, setCl] = useState("choseMain_btns__box")
    function MaleBtnClick() {
        setChoseMaleStatus(true);
        setCl("ChoseBtn__animation")
        setFamaleBtnClass('none')
        setTopNumClass("topNumbers topNumber__animation")
        if (ChoseMaleStatus) {
            setChoseMaleStatus(false)
            setFamaleBtnClass('choseMain_btns__box')
            setTopNumClass("topNumbers topNumber__animation__R")
            setCl("choseMain_btns__box ChoseBtn__animation__R")
        }
    }

    // top nuber class name
    const [topNumClass, setTopNumClass] = useState("topNumbers")

    return (
        <div className='choseAll'>
            <div className="chose">
                <div className={topNumClass}>
                    <div className="topNumbers_1 yellow">1</div>
                    <div className={ChoseFamaleStatus == true ? "topNumbers_1 yellow" : "topNumbers_1" && ChoseMaleStatus == true ? "topNumbers_1 yellow" : "topNumbers_1"}>2</div>
                    <div className="topNumbers_1">3</div>
                </div>
                <div className={ChoseFamaleStatus == true ? "choseMain choseMainRevers" : "choseMain" && ChoseMaleStatus == true ? "choseMain choseMainRevers" : "choseMain"}>
                    <div className="choseMain_title">
                        <h4 className={ChoseFamaleStatus == true ? 'none' : ChoseMaleStatus ? 'none' : "s_type"}>I want to swap my face in...</h4>
                    </div>
                    <div className="choseImgBtn">
                        <button>
                            <div className="img">
                                <Link to={'/image'}>
                                    <img src={btnPhoto1} alt="" />
                                </Link>
                            </div>
                            <h3>Images</h3>
                        </button>
                        <button>
                            <div className="img">
                                <Link to={'/image'}>
                                    <img src={btnGif} alt="" />
                                </Link>
                            </div>
                            <h3>Videos</h3>
                        </button>
                    </div>
                </div>
                <div className={ChoseFamaleStatus == false ? "choseFamale none" : "choseFamale"}>
                    <div className="choseFamaleMain">
                        <div className={imgBoxClass}>
                            <div className="choseFamale__imgBox__chil">
                                <img src={GoodFamale} alt="" />
                                <span className='emoji'>✅</span>
                                <p>Face cleary <br />visible</p>
                            </div>
                            <div className="choseFamale__imgBox__chil">
                                <img src={BadFamale} alt="" />
                                <span className='emoji'>❌</span>
                                <p>Face is <br />covered</p>
                            </div>
                        </div>
                    </div>
                    <button onClick={LoaderPageTimeout} className='choseFamaleTopBtn choseFamale__main'>Upload Photo</button>
                </div>
                {/* male box */}
                <div className={ChoseMaleStatus == false ? "choseFamale none" : "choseFamale"}>
                    <div className="choseFamaleMain">
                        <div className="choseFamale__imgBox choseFamale__main">
                            <div className="choseFamale__imgBox__chil">
                                <img src={Goodmale} alt="" />
                                <span className='emoji'>✅</span>
                                <p>Face cleary <br />visible</p>
                            </div>
                            <div className="choseFamale__imgBox__chil">
                                <img src={Badmale} alt="" />
                                <span className='emoji'>❌</span>
                                <p>Face is <br />covered</p>
                            </div>
                        </div>
                    </div>
                    <button onClick={LoaderPageTimeout} className='choseFamaleTopBtn choseFamale__main'>Upload Photo</button>
                </div>
            </div>
        </div>
    )
}