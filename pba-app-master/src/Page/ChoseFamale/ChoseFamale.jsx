import './chosefamale.css'

export default function ChoseFamale() {
    return (
        <div className="choseFamale">
            {/* <div className="topNumbers">
                <div className="topNumbers_1 yellow">1</div>
                <div className="topNumbers_1 yellow">2</div>
                <div className="topNumbers_1">3</div>
            </div> */}
            <div className="choseFamaleMain">
                <button className="choseMain_btns__box choseFamale__btn">
                    <h4>Famale</h4>
                    <div className='choseMain_btns__box__chil'>
                        <img src="https://avatars.mds.yandex.net/i?id=32c2b34df811140743dee41a4ebb793efcab46f1-10878007-images-thumbs&n=13" alt="" />
                        <img src="https://www.svgrepo.com/show/192247/man-user.svg" alt="" />
                        <img src="https://marketing.junior-it.ru/img/lessons/0a1d85b4078c7277215d814dde686b78.jpg" alt="" />
                    </div>
                </button>
                <div className="choseFamale__imgBox choseFamale__main">
                    <div className="choseFamale__imgBox__chil">
                        <img src="https://i.pinimg.com/originals/f5/ce/29/f5ce29d3f9cd766a5adf0c110e8ddbba.jpg" alt="" />
                        <p>Face cleary <br />visible</p>
                    </div>
                    <div className="choseFamale__imgBox__chil">
                        <img src="https://i.pinimg.com/originals/bf/bd/fa/bfbdfaff862632571ab1332f8415b853.jpg" alt="" />
                        <p>Face is <br />covered</p>
                    </div>
                </div>
            </div>
            <button className='choseFamaleTopBtn choseFamale__main'>Upload Photo</button>
        </div>
    )
}