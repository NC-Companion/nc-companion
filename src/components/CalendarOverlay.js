import React from "react";
import PT from "prop-types";

import './CalendarOverlay.css'

class CalendarOverlay extends React.Component {
    render() {
        const {title, img_url, author, tags, body} = this.props;
        return (
            <section className="overlayBody">
                <section class="hero overlay-hero is-medium">
                    <div class="hero-head">
                        <nav class="navbar">
                            <div class="container has-text-centered"></div>
                        </nav>
                    </div>

                    <div class="hero-body">
                        <div class="container has-text-left">
                            <section className='box hero overlay-body isDark'>

                                <section className='hero-head title has-text-white'>
                                    <section className='columns'>
                                        <section className='column is-four-fifths is-size-4'>
                                            <section>Tuesday 4th July 2018</section>
                                        </section>
                                        <section className='column is-one-fifths'>
                                            <span
                                                className='is-pulled-right button is-size-6 is-rounded is-danger'
                                                onClick={() => this.props.close()}>
                                                <i class="fa fa-times" aria-hidden="true"></i>
                                            </span>
                                        </section>
                                    </section>
                                </section>
                                <section className='hero-body'>
                                    <section
                                        className='section is-size-6 customScroll'
                                        style={{
                                        height: '60vh'
                                    }}>
                                        <span className='box'></span>
                                        <span className='box notification is-warning'>I am Mitch</span>
                                        <span className='box notification is-info'>I am Mitch</span>
                                        <span className='box'>I am Mitch</span>
                                        <span className='box notification is-warning'>I am Mitch</span>
                                        <span className='box notification is-warning'>I am Mitch</span>
                                        <span className='box'>I am Mitch</span>
                                        <span className='box notification is-info'>I am Mitch</span>
                                    </section>
                                </section>
                                <div class="hero-foot">
                                    <nav class="tabs">
                                        <div class="container">
                                            <ul>
                                                <li>
                                                    <a className="has-text-white">Optional</a>
                                                </li>
                                                <li>
                                                    <a className="has-text-warning">Mandatory</a>
                                                </li>
                                                <li>
                                                    <a className="has-text-info">Other</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
            </section>
        );
    }
}

export default CalendarOverlay;
