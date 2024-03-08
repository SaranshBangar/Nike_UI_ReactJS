const Button = ({ label, iconURL, backgroundColor, bordorColor, textColor }) => {
  return (
    <button
        className={`flex items-center justify-center gap-2 px-7 py-4 text-lg leading-none border font-montserrat rounded-full
          ${
            backgroundColor
              ? `${backgroundColor} ${textColor} ${bordorColor}`
              : 'bg-coral-red rounded-full text-white border-coral-red'}`}
    >
        {label}
        {iconURL && <img
            src={iconURL}
            alt="arrow right icon"
            className="w-5 h-5 ml-2 rounded-full"
        />}
    </button>
  )
}

export default Button