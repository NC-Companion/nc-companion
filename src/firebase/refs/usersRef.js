import { db } from "../firebase";
import * as queryUsers from '../queries/queryUsers';


export const addNewUser = (id, data) => {
  if(id && data)  {
    return db.ref('/users').child(id).set(data);
  }
}
export const updateUser = (userId, update) => {  
  return Promise.all(Object.keys(update).map(key => {
    return db.ref('/users').child(userId).update({key:update[key]});  
  }));
}
export const deleteUser = (userId) => {
  return db.ref("/users").child(userId).remove();
}