import './loaderphoto.css'

export default function LoaderPhoto() {
    return (
        <div className="loder">
            <div className="loaderMain">
                <div className="chose choseA1">
                    {/* <div className={"topNumbers topNumbersA1"}>
                        <div className="topNumbers_1 yellow">1</div>
                        <div className={"topNumbers_1 yellow"}>2</div>
                        <div className="topNumbers_1 yellow">3</div>
                    </div> */}
                    <div className="loaderMain__gifTexts">
                        <img src="https://i.giphy.com/TLJci36RLv0r9fjDnS.webp" alt="" />
                        <p className="loaderMain__gifTexts1">Drawing your avatars...</p>
                        <p className="loaderMain__gifTexts2">You will be automaatically redirect when it's finshed.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}