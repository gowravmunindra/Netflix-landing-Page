import './FeatureSection.css'

const FeatureSection = ({ title, description, imageClass, reversed }) => {
    return (
        <section className={`feature-section${reversed ? ' reversed' : ''}`}>
            <div className="outer">
                <div className="content">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className="image-container">
                    <div className={`feature-image ${imageClass}`}></div>
                </div>
            </div>
        </section>
    )
}

export default FeatureSection
