import Title from '../components/Title';
import ProjectCard from '../components/ProjectCard';
import CardGroup from '../components/CardGroup';

import background_video from '../assets/background_video.mp4';

import my_photo from '../assets/mi_foto.jpg';

import github_logo from '../assets/github.png';
import outlook_logo from '../assets/outlook.png';
import whatsapp_logo from '../assets/whatsapp.png';

import robokids from '../assets/robokids.jpg';
import gidcomp from '../assets/gidcomp.png';
import ahorraPlus from '../assets/AhorraPlus.png';
import myPyBlocks from '../assets/mypyblock.png';

function Homepage() {
    const contacts = [
        { logo: github_logo, alt: 'Github', link: 'https://github.com/Sergio-Covarrubias', },
        { logo: outlook_logo, alt: 'Outlook', link: 'mailto:sergio_cov@outlook.com', },
        { logo: whatsapp_logo, alt: 'WhatsApp - +52 6442284209', link: 'https://wa.link/3l8m84', },
    ];

    return (
        <div className='bg-black bg-opacity-10'> 

            <div className='absolute ml-[50%] flex items-center justify-center h-screen overflow-hidden'>
                <video src={ background_video } autoPlay loop muted className='fixed -z-10 w-auto min-w-full min-h-full max-w-none' />
            </div>

            { /* Profile */ }
            <div className='flex justify-center items-center min-h-screen p-16 animate-fade-down animate-once animate-duration-[2000ms] animate-ease-in-out'>
                <div className='block lg:flex mx-auto bg-slate-800 bg-opacity-50 rounded-lg w-[83%] shadow-gray-900 shadow-[5px_5px_0px_0px]'>
                    { /* Picture */ }
                    <div className='flex items-center w-[65%] lg:w-2/5 mt-[8%] lg:mt-0 mx-auto'>
                        <img src={ my_photo } alt='My Photograph' className=' rounded-lg lg:rounded-l-lg lg:rounded-r-none'/>
                    </div>

                    { /* Introduction */ }
                    <div className='w-full lg:w-3/5 px-[5%] lg:px-0 lg:mx-[5%] py-[6%] flex items-center'>
                        <div>
                            <h1 className='font-bold text-2xl lg:text-xl xl:text-2xl text-center lg:text-left'>Sergio Alejandro Covarrubias Cázares</h1>
                            <h2 className='font-bold text-xl lg:text-base xl:text-xl text-center lg:text-left'>B.S. in Computer Science and Technology</h2>
                            <h2 className='font-bold text-lg lg:text-sm xl:text-lg text-center lg:text-left'>Sophomore Year</h2>

                            <p className='text-sm lg:text-[70%] xl:text-sm text-center lg:text-left mt-[4%]'>
                            I'm a versatile programmer who is passionate about developing software with educational and general utility
                            purposes. I don't mind diving right into new tools or fields since widening my perspective is something I
                            highly value as it allows me to learn how to develop other types of products that I could have never done
                            before. So far I've had experience in Web Development with React and NodeJS and also with the WordPress 
                            designer as well with Game Development with the Unity 2D game engine.
                            </p>

                            { /* Media */ }
                            <div className='flex justify-center space-x-[10%] lg:space-x-12 mt-[8%]'>
                                {
                                    contacts.map((contact, index) => (
                                        <a key={ index } href={ contact.link } target='_blank'><img src={ contact.logo } alt={ contact.alt } className='transition duration-200 inline-block h-16 lg:h-12 xl:h-16 hover:scale-125' /></a>
                                    ))
                                }
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
            
            { /* Projects */ }
            <Title name='PROJECTS' />
            <CardGroup>
                <ProjectCard title='AhorraPlus' dates={[ 'September 14th 2024', ]} image={ ahorraPlus } alt='AhorraPlus image' description={[
                    'Created a personal finance management website for HackMTY hackathon event as an initiative for Capital One.',
                    'React and Tailwind for the frontend.',
                    'NodeJS for the backend.',
                    'MongoDB for the database.',
                    ]} link='https://ahorraplus.onrender.com' 
                    className='animate-fade-left animate-once animate-duration-[2000ms] animate-ease-in-out' />
                <ProjectCard title='MyPyBlocks' dates={[ 'June 2024 - Ongoing', ]}  image={ myPyBlocks } alt='MyPyBlocks image' description={[
                    'Creating a python block language app in Unity as a way of easing the initial process of learning the basics of programming.',
                    'Converts from block language to a python script.',
                    'Currently supports conditionals, loops, arrays, dictionaries and functions.',
                    ]} link='https://desisacc.itch.io/mypyblock'
                    className='animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in-out' />
            </CardGroup>

            <Title name='EXPERIENCES' />
            <CardGroup>
                <ProjectCard title='Internship at GIDCOMP' dates={[ 'February 2024 - June 2024', ]} image={ gidcomp } alt='GIDCOMP image' description={[
                    'Designed and created pages such as the home, conferences, profile and articles pages with the Elementor plugin.', 
                    'Added a multilingual feature to the website.',
                    'Worked on the newsletter by using Brevo\'s integrations with WordPress',
                    ]} link='https://guillermoarmenta.com' 
                    className='animate-fade-left animate-once animate-duration-[2000ms] animate-ease-in-out' />
                <ProjectCard title='RoboKids' dates={[ 'August 2023 - December 2023', 'June 10th 2024 - June 21st 2024', ]} image={ robokids } alt='RoboKids image' description={[
                    'Teached in a robotics course for elementary-grade level kids.',
                    'Taught them how to code in a block language to control the robots\' actions.',
                    'The course used LEGO-like materials to build the robots.',
                    ]} link='https://www.facebook.com/PROVAYOFICIAL/posts/pfbid0KEux9MPXpNVKwKU6DqfwkEGTYcerttQnqiDnp3eXTP5XP5eBwY8JthJTKEsWfWVHl'
                    className='animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in-out' />
            </CardGroup>

           
        </div>
    )
}

export default Homepage;
