import React, { Component } from 'react';

const TITLES = [
    'I am...',
    ''
];

class IntroAnimate extends Component {
    state = { titleIndex: 0, fadeIn: true };

    componentDidMount() {
        console.log('IntroAnimate component has mounted', this.state);
        this.timeout = setTimeout(() => this.setState({fadeIn: false}), 2000);
        this.animateTitles();
    }

    componentWillUnmount() {
        console.log('IntroAnimate component will unmount');
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout);    }

    animateTitles = () => {
        this.titleInterval = setInterval(() => {
            const NextTitleIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({ titleIndex: NextTitleIndex, fadeIn: true });
            this.timeout = setTimeout(() => this.setState({fadeIn: false}), 500);
            if (NextTitleIndex === TITLES.length-1) {
                clearInterval(this.titleInterval);
                clearTimeout(this.timeout);
                this.props.onIntroAnimationComplete();
            }
        }, 3000);
    }

    render() {
        const { titleIndex, fadeIn } = this.state;
        const title = TITLES[titleIndex];
        return(
            <div>
                <h2 className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>{title}</h2>
            </div>
        )
    }
}

export default IntroAnimate;