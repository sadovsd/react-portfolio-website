import React from 'react';
import { CalendarIcon, GithubIcon, TagIcon, ArrowRightIcon } from '../../icons';
import jeromePowell from '../../assets/jeromePowell.webp';

const Project3 = () => {
    return(
        <div className='container mt-20 w-[70rem] text-left'>
            <h3 className='leading-tight text-[4rem] font-black'>A From-Scratch, Full Stack CPI Data Viewer</h3>
            <h3 
            // leading-none, leading-tight, leading-snug, leading-normal, leading-relaxed, and leading-loose.

            // font-thin: 100
            // font-extralight or font-200: 200
            // font-light or font-300: 300
            // font-normal or font-400: 400
            // font-medium or font-500: 500
            // font-semibold or font-600: 600
            // font-bold or font-700: 700
            // font-extrabold or font-800: 800
            // font-black or font-900: 900
                className='text-neutral-500 text-[1.9rem] font-normal mt-8 leading-relaxed'>
                    {/* Using SAS on demand to store and manipulate historical government consumer price index data, React to build a user application, and a Flask API to process user requests */}
                    How I Built a Full Stack Data Analysis Application for Government Consumer Price Index Data
            </h3>
            <hr className='mt-8'></hr>
            <CalendarIcon></CalendarIcon>
            <GithubIcon></GithubIcon>
            <TagIcon></TagIcon>
            <div className='flex'>
                <h3>Use Viewer</h3>
                <ArrowRightIcon className='' />
            </div>

            <hr className='my-8'></hr>
            <img 
                src={jeromePowell} 
                alt='Jerome Powell' 
                // className='h-[400px] p-16' 
            />
            <p className='mt-4 text-center'>Jerome Powell thinks its ok</p>
            <p className='text-[1.9rem] leading-relaxed mt-12'>
            Data was acquired from U.S bureau of labor statistics https://www.bls.gov/cpi/data.htm. The complete file structure used can be easily examined here: https://download.bls.gov/pub/time.series/cu/. 

The best way to understand the data here is in terms of series. Each series id (ex.    )  uniquely identifies

How was this underlying dataset created? I started off with the cu.data.12.USHousing.txt data that contained 58110 observations. Here, there were numerous kinds of series_id’s – basically a series of observations corresponding to a particular category of housing expense type. The “underlying dataset” was an extraction of 169 observations corresponding to a singular series_id. 
Since the user only gave a keyword for the kind of expense type to plot (in this case just “housing”), I had to go through the trouble of finding out a series_id to connect it to. I did this using two other files: cu.items.txt and cu.series.txt. The items file contained descriptions of particular consumer products (where keywords can be found) and the item_codes they correspond to. The series file contained the item_codes and the series_id they correspond to. I used proc SQL to query these files and find a series_id from the series file that corresponds to the keyword that the user inputted. An additional SAS data step was used to parse through the product descriptions variable to find a match with the keyword. 
Sometimes, a keyword can appear in multiple observations of the items file. For the purposes of the project, I selected just the first observation that matched. Also, an item_code relates to multiple series_ids (item_code symbolizes a consumer product but series_id symbolizes the product in addition to its location in the U.S, collection type, and whether its seasonally adjusted). I picked only the series_id symbolizing average value across all U.S cities, a monthly collection type, and a non-seasonally adjusted method of calculation. 

            </p>

        </div>
    );

}


export default Project3;