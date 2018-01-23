import React from 'react';
import NewsStory from './NewsStory';
import FilterButtons from './Filter-buttons';
import NewsStoryOverlay from './NewsStoryOverlay';

class NewsStories extends React.Component {

    state = {
        stories: [{ title: 'Man eats bat.', author: 'Mitch' }, { title: 'Boy walks again on mars.', picture: 'http://goldwallpapers.com/uploads/posts/wallpaper-house/wallpaper_house_001.jpg' }, { title: 'Man eats bat.', author: 'Mitch' }, { title: 'Somalia. Finally undivided.', picture: 'https://lh3.googleusercontent.com/imrQ8FaGZ63Ew4fXWNsEOVfowa5axvc5eHjtNJumbQdOQ9jOhsZBBhmSKheG0ZOt9LM=h900' }, { title: 'Man eats bat.', author: 'Mitch' }, { title: 'Girl predicts the end of the world.', picture: 'https://wallpaperscraft.com/image/car_db5_aston_martin_93821_1920x1080.jpg' }, { title: 'Man eats bat.', author: 'Mitch' }],
        story: {}
    }


    render() {
        return (
            <section className="newsFeedBody">
                <NewsStoryOverlay story={this.state.story} />
                <section className="searchFilter">
                    <section className="inputField">
                        <input className="input" type="text" placeholder="Search news..." />
                    </section>
                    <FilterButtons />
                </section>
                <section className='newsStories section'>
                    {this.state.stories.map((story, i) => <NewsStory key={i} story={story} stateStory={this.changeStory} />)}
                </section>
            </section>
        )
    }

    changeStory = story => {
        this.setState({
            story: story
        })
    }
}

export default NewsStories; 