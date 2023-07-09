import React, { Component } from 'react';
import stoman from '../../assets/stoman.png';
import headshot from '../../assets/headshot.png';
import IntroAnimate from '../animations/IntroAnimate';
import TitlesAnimate from '../animations/TitlesAnimate';
import TitlesSlowAnimate from '../animations/TitlesSlowAnimate';
import { motion } from 'framer-motion';


class Home extends Component {

    state = { introAnimationComplete: false, titleAnimationComplete: false, showTitles: false, showTitleSlow: false};

    handleIntroAnimationComplete = () => {
        this.setState({ introAnimationComplete: true });
        setTimeout(() => {
            this.setState({ showTitles: true });
          }, 50);
    };

    handleTitleAnimationComplete = () => {
        this.setState({ titleAnimationComplete: true });
        setTimeout(() => {
            this.setState({ showTitleSlow: true });
          }, 500);
    };

    render() {
        const { introAnimationComplete, titleAnimationComplete, showTitles, showTitleSlow } = this.state;
        return (
            <div className='container'>
                <div className='flex flex-col md:flex-row m-auto md:m-28 md:ml-8'>
                    <motion.div className="basis-5/12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1.5 } }}
                    exit={{ opacity: 0, transition: { duration: 1.5 } }}>
                        <div className='basis-5/12 md:pl-[100px] md:pt-[100px]'>
                            {/* tracking-[10px]  */}
                            <h1 className='mb-12 text-[5.3rem] tracking-[.5rem]'>DAVYD SADOVSKYY</h1>
                            <div className='mt-40'>
                                <IntroAnimate onIntroAnimationComplete={this.handleIntroAnimationComplete} />
                                {introAnimationComplete && showTitles && <TitlesAnimate onTitleAnimationComplete={this.handleTitleAnimationComplete} />}
                                {titleAnimationComplete && showTitleSlow && <TitlesSlowAnimate />}
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className="basis-7/12" 
                        initial={{ opacity: 0, x: 140 }} 
                        animate={{ opacity: 1, x: 0, transition: { duration: 1.5 } }} 
                        exit={{ opacity: 0, x: -100 }}>
                        <img src={stoman} alt='stoman'/>
                    </motion.div>
                </div>
                <div className='flex flex-col md:flex-row mt-40 mb-32 border-soli'>
                    <img src={headshot} className='h-[400px] p-16' />
                    <p className='text-[25px] p-12'>
                    </p>
                </div>
            </div>
        );
    }
}

export default Home;

