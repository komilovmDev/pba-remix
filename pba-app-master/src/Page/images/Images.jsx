import { useState } from 'react';
import { Link } from 'react-router-dom';
import './image.css';

export default function Images() {
    const [isVideoMode, setIsVideoMode] = useState(false);

    const toggleMode = () => {
        setIsVideoMode(prevMode => !prevMode);
    };

    return (
        <>
            <div className="chose choseIMage">
                <div className={"topNumbers"}>
                    <div className="topNumbers_1 yellow">1</div>
                    <div className="topNumbers_1 yellow">2</div>
                    <div className="topNumbers_1">3</div>
                </div>
                <div className="imagesHeader">
                    <h4>{isVideoMode ? 'Videos' : 'Images'}</h4>
                    <button onClick={toggleMode}>Switch to {isVideoMode ? 'videos' : 'images'}</button>
                </div>
                <div className="imgBoxes">
                    {isVideoMode ? (
                        <>
                            <div className="imgBox">
                                <Link to={'/uplodeface'}>
                                    <div className="img">
                                        <img src="" alt="" />
                                    </div>
                                </Link>
                                <h3>Title</h3>
                            </div>
                            <div className="imgBox">
                                <Link to={'/uplodeface'}>
                                    <div className="img">
                                        <img src="" alt="" />
                                    </div>
                                </Link>
                                <h3>Title</h3>
                            </div>
                            <div className="imgBox">
                                <Link to={'/uplodeface'}>
                                    <div className="img">
                                        <img src="" alt="" />
                                    </div>
                                </Link>
                                <h3>Title</h3>
                            </div>
                            <div className="imgBox">
                                <Link to={'/uplodeface'}>
                                    <div className="img">
                                        <img src="" alt="" />
                                    </div>
                                </Link>
                                <h3>Title</h3>
                            </div>
                            <div className="imgBox">
                                <Link to={'/uplodeface'}>
                                    <div className="img">
                                        <img src="" alt="" />
                                    </div>
                                </Link>
                                <h3>Title</h3>
                            </div>
                            <div className="imgBox">
                                <Link to={'/uplodeface'}>
                                    <div className="img">
                                        <img src="" alt="" />
                                    </div>
                                </Link>
                                <h3>Title</h3>
                            </div>
                            <div className="imgBox">
                                <Link to={'/uplodeface'}>
                                    <div className="img">
                                        <img src="" alt="" />
                                    </div>
                                </Link>
                                <h3>Title</h3>
                            </div>
                            <div className="imgBox">
                                <Link to={'/uplodeface'}>
                                    <div className="img">
                                        <img src="" alt="" />
                                    </div>
                                </Link>
                                <h3>Title</h3>
                            </div>
                            <div className="imgBox">
                                <Link to={'/uplodeface'}>
                                    <div className="img">
                                        <img src="" alt="" />
                                    </div>
                                </Link>
                                <h3>Title</h3>
                            </div>
                            <div className="imgBox">
                                <Link to={'/uplodeface'}>
                                    <div className="img">
                                        <img src="" alt="" />
                                    </div>
                                </Link>
                                <h3>Title</h3>
                            </div>
                            <div className="imgBox">
                                <Link to={'/uplodeface'}>
                                    <div className="img">
                                        <img src="" alt="" />
                                    </div>
                                </Link>
                                <h3>Title</h3>
                            </div>
                            <div className="imgBox">
                                <Link to={'/uplodeface'}>
                                    <div className="img">
                                        <img src="" alt="" />
                                    </div>
                                </Link>
                                <h3>Title</h3>
                            </div>
                            <div className="imgBox">
                                <Link to={'/uplodeface'}>
                                    <div className="img">
                                        <img src="" alt="" />
                                    </div>
                                </Link>
                                <h3>Title</h3>
                            </div>
                            <div className="imgBox">
                                <Link to={'/uplodeface'}>
                                    <div className="img">
                                        <img src="" alt="" />
                                    </div>
                                </Link>
                                <h3>Title</h3>
                            </div>
                            <div className="imgBox">
                                <Link to={'/uplodeface'}>
                                    <div className="img">
                                        <img src="" alt="" />
                                    </div>
                                </Link>
                                <h3>Title</h3>
                            </div>
                            <div className="imgBox">
                                <Link to={'/uplodeface'}>
                                    <div className="img">
                                        <img src="" alt="" />
                                    </div>
                                </Link>
                                <h3>Title</h3>
                            </div>
                            <div className="imgBox">
                                <Link to={'/uplodeface'}>
                                    <div className="img">
                                        <img src="" alt="" />
                                    </div>
                                </Link>
                                <h3>Title</h3>
                            </div>
                            <div className="imgBox">
                                <Link to={'/uplodeface'}>
                                    <div className="img">
                                        <img src="" alt="" />
                                    </div>
                                </Link>
                                <h3>Title</h3>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="imgBox">
                                <Link to={'/uplodeface'}>
                                    <div className="img">
                                        <img src="" alt="" />
                                    </div>
                                </Link>
                                <h3>Title</h3>
                            </div>
                            <div className="imgBox">
                                <Link to={'/uplodeface'}>
                                    <div className="img">
                                        <img src="" alt="" />
                                    </div>
                                </Link>
                                <h3>Title</h3>
                            </div>
                            <div className="imgBox">
                                <Link to={'/uplodeface'}>
                                    <div className="img">
                                        <img src="" alt="" />
                                    </div>
                                </Link>
                                <h3>Title</h3>
                            </div>
                            <div className="imgBox">
                                <Link to={'/uplodeface'}>
                                    <div className="img">
                                        <img src="" alt="" />
                                    </div>
                                </Link>
                                <h3>Title</h3>
                            </div>
                            <div className="imgBox">
                                <Link to={'/uplodeface'}>
                                    <div className="img">
                                        <img src="" alt="" />
                                    </div>
                                </Link>
                                <h3>Title</h3>
                            </div>
                            <div className="imgBox">
                                <Link to={'/uplodeface'}>
                                    <div className="img">
                                        <img src="" alt="" />
                                    </div>
                                </Link>
                                <h3>Title</h3>
                            </div>
                            <div className="imgBox">
                                <Link to={'/uplodeface'}>
                                    <div className="img">
                                        <img src="" alt="" />
                                    </div>
                                </Link>
                                <h3>Title</h3>
                            </div>
                            <div className="imgBox">
                                <Link to={'/uplodeface'}>
                                    <div className="img">
                                        <img src="" alt="" />
                                    </div>
                                </Link>
                                <h3>Title</h3>
                            </div>
                            <div className="imgBox">
                                <Link to={'/uplodeface'}>
                                    <div className="img">
                                        <img src="" alt="" />
                                    </div>
                                </Link>
                                <h3>Title</h3>
                            </div>
                            <div className="imgBox">
                                <Link to={'/uplodeface'}>
                                    <div className="img">
                                        <img src="" alt="" />
                                    </div>
                                </Link>
                                <h3>Title</h3>
                            </div>
                            <div className="imgBox">
                                <Link to={'/uplodeface'}>
                                    <div className="img">
                                        <img src="" alt="" />
                                    </div>
                                </Link>
                                <h3>Title</h3>
                            </div>
                            <div className="imgBox">
                                <Link to={'/uplodeface'}>
                                    <div className="img">
                                        <img src="" alt="" />
                                    </div>
                                </Link>
                                <h3>Title</h3>
                            </div>
                            <div className="imgBox">
                                <Link to={'/uplodeface'}>
                                    <div className="img">
                                        <img src="" alt="" />
                                    </div>
                                </Link>
                                <h3>Title</h3>
                            </div>
                            <div className="imgBox">
                                <Link to={'/uplodeface'}>
                                    <div className="img">
                                        <img src="" alt="" />
                                    </div>
                                </Link>
                                <h3>Title</h3>
                            </div>
                            <div className="imgBox">
                                <Link to={'/uplodeface'}>
                                    <div className="img">
                                        <img src="" alt="" />
                                    </div>
                                </Link>
                                <h3>Title</h3>
                            </div>
                            <div className="imgBox">
                                <Link to={'/uplodeface'}>
                                    <div className="img">
                                        <img src="" alt="" />
                                    </div>
                                </Link>
                                <h3>Title</h3>
                            </div>
                            <div className="imgBox">
                                <Link to={'/uplodeface'}>
                                    <div className="img">
                                        <img src="" alt="" />
                                    </div>
                                </Link>
                                <h3>Title</h3>
                            </div>
                            <div className="imgBox">
                                <Link to={'/uplodeface'}>
                                    <div className="img">
                                        <img src="" alt="" />
                                    </div>
                                </Link>
                                <h3>Title</h3>
                            </div> 
                            
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
