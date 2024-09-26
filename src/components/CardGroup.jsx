function CardGroup({ children }) {
    return (
        <div className='flex justify-center'>
                <div className='flex flex-wrap w-[80%] mb-4 justify-center'>
                    { children }
                </div>
            </div>
    )
}

export default CardGroup;
