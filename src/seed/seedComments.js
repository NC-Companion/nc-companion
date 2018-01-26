import faker from 'faker';
import * as ref from '../firebase/refs/commentsRef';
const randomCommentGenerator = () => {
  const type = ['rsvp','mandatory', 'announcements'];
  for(let i = 0;i < 50;i++) {
    const data = {
      eventId :faker.fake("{{random.uuid}}"),
      userId :faker.fake("{{random.uuid}}"),    
      body :faker.fake("{{lorem.paragraphs}}"),
      votes :faker.fake("{{random.number}}"),      
      craetionDate : new Date(Date.now()).toISOString()
    }
    ref.postNewComment(data, (err)=>{
      console.log(err);
    })    
  }
}

export default randomCommentGenerator;