import { useState } from "react";
import { Item } from "./types/item";
import { ListItem } from "./components/listItem";
import * as C from "./app.styles";
import { AddArea } from "./components/addArea";

const App = () =>{
  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Do the homework', done: false},
    {id: 2, name: 'Clean the bedroom', done: true}
  ]);

  const handleAddTask = (taskName: string) =>{
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  return(
    <C.Container>
      <C.Area>
        <C.Header>
          To Do List
        </C.Header>

        {/* New task add area */ }
        <AddArea onEnter={handleAddTask}/>
        {/* Task list */ }
        {list.map((item, index) => (
          <ListItem 
          key={index} 
          item={item}
          onChange={handleTaskChange}
          />
        ))}
      </C.Area>
      <C.Footer>
        Feito por Eduardo Rodrigues&copy; 
      </C.Footer>
    </C.Container>
    
  );
}

export default App;