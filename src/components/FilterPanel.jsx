import React from 'react'

function FilterPanel({itemsLeft, todoFilter}) {
  return (
	 <>
	   <span>{itemsLeft.length + " "}items left</span>
      <button onClick={(e) => todoFilter("all")}>All</button>
      <button onClick={(e) => todoFilter(false)}>Active</button>
      <button onClick={(e) => todoFilter(true)}>Completed</button>
      <button onClick={(e) => todoFilter("Clear")}>Clear completed</button>
	 </>
  )
}

export default FilterPanel