



function InputField({text, setText, handlePressEnter}) {
  return (
	 <div>
			<input className='inpt'
				placeholder='What needs to be done?'
				value={text} onChange={(e) => setText(e.target.value)}
				onKeyDown={handlePressEnter}
			/>
	 </div>
  )
}

export default InputField