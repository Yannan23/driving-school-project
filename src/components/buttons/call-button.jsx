const CallButton = () => {
    const handleClick = () => {
        window.location.href = 'tel:+61470272595'
    }

    return (
        <button className="!bg-transparent hover:bg-transparent">
            <p onClick={handleClick} className='hover:text-amber-400 hover:underline cursor-pointer font-Roboto-Condensed'>0470272595</p>
        </button>
    )
}

export default CallButton;