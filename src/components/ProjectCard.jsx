function ProjectCard({ title, dates, image, alt, description, link }) {
    return (
        <div className='flex items-center justify-center bg-slate-800 bg-opacity-50 rounded-md px-[4%] py-[10%] lg:py-[5%] lg:w-[45%] mx-auto mb-12 shadow-gray-900 shadow-[4px_4px_0px_0px] animate-fade animate-once animate-duration-[2000ms] animate-ease-in-out'>
            <div>
            { /* Image */ }
            <div className='flex justify-center'>
                <img src={ image } alt={ alt } className='rounded-lg w-3/4'/>
            </div>
            { /* Description */ }
            <div className='block text-center mt-[5%] px-[8%]'>
                <h1 className='font-bold text-[190%] mb-[0%]'>{ title }</h1>
                {
                    dates.map((date, index) => (
                        <h2 key={ index } className='text-[95%] lg:text-[110%] font-light'>{ date }</h2>
                    ))
                }
                <hr className='inline-block my-[2%]' />
                {
                    description.map((element, index) => (
                        <div key={ index }>
                            <p className='text-sm py-[4%]'>{ element }</p>
                            {
                                index == description.length - 1 ? <></> : 
                                <div key={ index } className='flex justify-center'>
                                    <hr className='w-[80%] border-dashed'/>
                                </div> 
                            }
                        </div>
                    ))
                }
                <a href={ link } target='_blank' className='inline-block border-sky-500 border-2 rounded-sm font-extralight px-4 py-2 mt-6 transition ease-in-out duration-200 hover:font-semibold hover:bg-sky-500 hover:scale-110 '>Try-out link</a>
            </div>
            </div>
        </div>
    )
}

export default ProjectCard;
