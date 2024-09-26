function Title({ name }) {
    return (
        <div className='w-[87%] mx-auto mb-14'>
            <hr className='h-1 bg-white' />
            <h1 className='text-center font-medium drop-shadow-sm tracking-widest text-[250%] my-3'>{ name }</h1>
            <hr className='h-1 bg-white' />
        </div>
    )
}

export default Title;
