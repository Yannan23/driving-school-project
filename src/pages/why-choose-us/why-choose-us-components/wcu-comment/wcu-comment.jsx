
const WhyChooseUsComment = () => {

    return(
        <div className="wcu-comment-box">
            <h3 className="wcu-comment-title">
                What Our Student Say
            </h3>

            <div className="wcu-comment-card">
                <div className="wcu-personal-info">
                    <img className="wcu-avatar-img" src="" alt="avatar" />
                    <h3 className="wcu-student-name">Jenny L</h3>
                </div>

                <div className="wcu-star-box">
                    ★★★★★
                </div>

                <span className="wcu-comment-content">
                    The instructors at NSW Safe Driving School are highly skilled and patient. They explain everything clearly and build your confidence step by step. I passed my driving test on the first try thanks to their expert guidance!
                </span>

                <div className="wcu-arrow-box">
                    <button className="wcu-arrow-btn">←</button>
                    <button className="wcu-arrow-btn">→</button>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUsComment