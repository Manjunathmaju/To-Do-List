import {setData} from './interface-storage.js'
let taskObject={};
export function prepareObject(num,value){
    taskObject[num]={
        id:num,
        task:value,
        status:false
    }
}



