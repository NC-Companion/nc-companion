import faker from 'faker';
import * as ref from '../firebase/refs/commentsRef';
const users = ['-L3muDmrwcStsF5ejww8','-L3muDmwAmk7-m2T5_X_','y1f5muGqhteOF5Z72U05Jx4UPcg1','erzfMpHA0cRNnYsADtwt4YvScJ62',
'U9LA7rS3u2MIwhQmetwbt4WwuXz2','3bT0h3Shn9T8MXlpH5FEOcU8v253','-L3muDn75FgaabJ39eAv','-L3muDn6Q_rtbmkwA49d'];
const events = ['-L47zBlp1nmu6jnjivvx','-L47zBlyqTGjyWVy7ena','-L47zBm5YSJIYcEf0aTA','-L47zBmBTw5BApLBLSbY',
'-L47zBmEN6dEiNZFOuMa','-L47zBmIBiD7krtJKc-v','-L47zBmNhaIaKq6rgfNw','-L47zBmRxbcp2IKorH7w','-L47zBmUjDPRGgu-byDA'];
const randomCommentGenerator = () => {
  console.log('in randomCommentGenerator')
  const type = ['rsvp','mandatory', 'announcements'];
  for(let i = 0;i < 50;i++) {
    const data = {
      eventId : events[Math.round(Math.random()*7)],
      userId : users[Math.round(Math.random()*7)],    
      body : faker.fake("{{lorem.paragraphs}}"),
      votes : faker.fake("{{random.number}}"),      
      creationDate : new Date(Date.now()).toISOString()
    }
    ref.postNewComment(data, (err)=>{
      console.log(err);
    });    
  }
}

export default randomCommentGenerator;