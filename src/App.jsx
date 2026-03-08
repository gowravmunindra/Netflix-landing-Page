import Header from './components/Header'
import FeatureSection from './components/FeatureSection'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import './App.css'

const features = [
    {
        title: 'Enjoy on your TV',
        description: 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
        imageClass: 'image1',
        reversed: false,
    },
    {
        title: 'Download your shows to watch offline',
        description: 'Save your favourites easily and always have something to watch.',
        imageClass: 'image2',
        reversed: true,
    },
    {
        title: 'Watch everywhere',
        description: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
        imageClass: 'image3',
        reversed: false,
    },
    {
        title: 'Create profiles for kids',
        description: 'Send children on adventures with their favourite characters in a space made just for them—free with your membership.',
        imageClass: 'image4',
        reversed: true,
    },
]

function App() {
    return (
        <div className="app">
            <Header />

            {features.map((feature, index) => (
                <FeatureSection
                    key={index}
                    title={feature.title}
                    description={feature.description}
                    imageClass={feature.imageClass}
                    reversed={feature.reversed}
                />
            ))}

            <FAQ />

            <Footer />
        </div>
    )
}

export default App
