
const WhyChooseUsComment = () => {

    return(
        <div className="why-choose-us-comment-box">
            <h3 className="comment-title">
                What Our Student Say
            </h3>

            <div className="comment-card">
                <div className="personal-info">
                    <img className="avatar-img" src="" alt="avatar" />
                    <h3 className="student-name">Jenny L</h3>
                </div>

                <div className="star-box">
                ★★★★★
                </div>

                <span className="comment-content">
                "The instructors at NSW Safe Driving School are highly skilled and patient. They explain everything clearly and build your confidence step by step. I passed my driving test on the first try thanks to their expert guidance!"
                </span>

                <div className="arrow-box">
                    <button class="arrow-btn">←</button>
                    <button class="arrow-btn">→</button>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUsComment