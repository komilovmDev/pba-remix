import './uplodeface.css'
// import GoodFamale from "./../../assets/img/BadGood/good-female.png";
// import Badmale from "./../../assets/img/BadGood/bad-male.png";
import Goodmale from "./../../assets/img/BadGood/good-male.png";
import BadFamale from "./../../assets/img/BadGood/bad-female.png";
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function UplodeFace({ LoaderPageTimeout }) {


    return (
        <>
            <div className="chose choseUplodeFace">
                <Link style={{ textDecoration: "none" }} to={'/image'}><button className='goBack'><FaAngleLeft />Go back</button></Link>
                <div className={"topNumbers"}>
                    <div className="topNumbers_1 yellow">1</div>
                    <div className="topNumbers_1 yellow">2</div>
                    <div className="topNumbers_1 yellow">3</div>
                </div>
                <div className={"choseFamale"}>
                    <div className="choseFamaleMain">
                        <div className={"choseFamale__imgBox choseFamale__main"}>
                            <div className="choseFamale__imgBox__chil">
                                <img src={Goodmale} alt="" />
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
                    <button onClick={LoaderPageTimeout} style={{ color: "white" }} className='choseFamaleTopBtn choseFamale__main'>Upload Face</button>
                </div>
            </div>
        </>
    )
}