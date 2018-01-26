import faker from 'faker';
import * as ref from '../firebase/refs/usersRef';
const usersGenerator = () => {
  const type = ['student','admin'];
  for(let i = 0;i < 10;i++) {
    const data = {
      name : faker.fake("{{name.lastName}} ,{{name.firstName}}"),
      handle : faker.fake("@{{name.lastName}}"),
      userType : type[Math.round(Math.random())],
      body:faker.fake("{{lorem.paragraphs}}"),
      cohort: 'Nov 17',
      avatarUrl : faker.fake("{{internet.avatar}}"),
      subscription : ['personalUid', 'globalUid','cohortUid'],
      creationDate : new Date(Date.now()).toISOString()
    }
    ref.addNewUser(data, (err)=>{
      console.log(err);
    })    
  }
}
export default usersGenerator;