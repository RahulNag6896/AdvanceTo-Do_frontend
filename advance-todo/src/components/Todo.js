const Todo = ({i,values}) => {
    // Further destructuring the array
    const {item,todos, setTodos} = values

      // Checkes each todo if it is completed and sets Todos state to new array.
    const isChecked = (i)=> {
        let newArr = [...todos]
        if(newArr[i].done === false)
            newArr[i].done = true
        else{
            newArr[i].done = false  
        }
        setTodos(newArr)
    }

    return(
            <div key={i}>
                <input type='checkbox' value={item.done} onChange={e=>isChecked(i)}/>
                <span className={item.done === true? 'deleted':''}>{item.todo}</span><span>+</span>
            </div>
    )
}

export default Todo