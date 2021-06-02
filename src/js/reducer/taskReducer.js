import { ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_COMPLETE } from "../type";

const initialState = {
    taskList:[
            {
                id:1,
                task:"LEARN  HTML && CSS",
                isDone:true
            },
            {
                id:2,
                task:"LEARN ES6",
                isDone:true
            },
            {
                id:1,
                task:"LEARN REACT && NODE",
                isDone:false
            },


    ]
}
const taskReducer = (state=initialState,{type,payload}) => {
    switch (type){
        case ADD_TASK:
           return {...state,taskList: [...state.taskList,payload]};

        case DELETE_TASK:
            return {...state,taskList:state.taskList.filter((todo) => todo.id !== payload)};
        case TOGGLE_COMPLETE:
            return{...state,taskList:state.taskList.map((todo) =>todo.id === payload ? {...todo,isDone : !todo.isDone}  : todo),};
        case EDIT_TASK:
            return{...state,taskList:state.taskList.map((todo)=>todo.id === payload.id?{...todo,task:payload.value}:todo)}
        default :
        return state;

    }


}

 
export default taskReducer;