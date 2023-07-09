import React, { Component } from 'react';

const TITLES = [
    'Clear',
    'Driven to be the change'
];

class TitlesSlowAnimate extends Component {
    state = { titleIndex: 0, fadeIn: true };

    componentDidMount() {
        console.log('TitlesSlowAnimate component has mounted', this.state);
        this.timeout = setTimeout(() => this.setState({fadeIn: false}), 700);
        this.animateTitles();
    }

    componentWillUnmount() {
        console.log('TitlesSlowAnimate component will unmount!');
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout);
    }

    animateTitles = () => {
        this.titleInterval = setInterval(() => {
            const NextTitleIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({ titleIndex: NextTitleIndex, fadeIn: true });
            this.timeout = setTimeout(() => this.setState({fadeIn: false}), 700);
            if (NextTitleIndex === TITLES.length - 1) {
                clearInterval(this.titleInterval);
                clearTimeout(this.timeout);
            }
        }, 1400);
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

export default TitlesSlowAnimate;