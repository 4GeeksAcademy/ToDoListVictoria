import React , {useState} from "react";

export const ToDoList = () => {
    const [task , setTask] = useState('');
    const [list , setList] = useState(['Wake up']);
    

   
    const handleSubmit = (event) => {
        event.preventDefault();
        if (task.trim() !== '') {
            setList([...list, task]);
            setTask('');
          } else {
            setTask('');
          }
    }

    const deletetask = (item) => {
        console.log(item)
        setList(list.filter((element) => element !== item))
      }
   
    return(
 <>
    <div className="container col-10 col-sm-8 col-md-6">
       <form onSubmit={handleSubmit}>
            <label htmlFor="exampleFormControlInput1"><h1>To-Do list</h1></label>
            <input type="text" className="form-control container col-6 sm-col-4" id="exampleFormControlInput1" 
            value={task} onChange={(event) => setTask(event.target.value)} />
        </form>
        <ul className="list-group mt-2">       
          {list.map((item, id) => <li key={id} className="list-group-item d-flex justify-content-between hidden-icon">
            {item}
            <span onClick={() => deleteTask(item)}>
              <i className="fas fa-trash text-danger"></i>
            </span>
                       
            </li>)}
            
          <li className="list-group-item text-end bg-light fw-lighter">
            {list.length} items
          </li>
        </ul>
  
        </div>
 </>
    )
}
