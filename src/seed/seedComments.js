import faker from 'faker';
import * as ref from '../firebase/refs/commentsRef';
const users = ['-L3muDmrwcStsF5ejww8','-L3muDmwAmk7-m2T5_X_','y1f5muGqhteOF5Z72U05Jx4UPcg1','erzfMpHA0cRNnYsADtwt4YvScJ62',
'U9LA7rS3u2MIwhQmetwbt4WwuXz2','3bT0h3Shn9T8MXlpH5FEOcU8v253','-L3muDn75FgaabJ39eAv','-L3muDn6Q_rtbmkwA49d'];
const events = ['-L4AniqVhusStuj7mrFE','-L4AniqdG3qlWez7euZd','-L4AniqhB2yt0Ry1Gy1M','-L4AniqmMmqPaWd7SWBl','-L4AniqsjTaTf47VyS0u','-L4AniqunzXvR4uck_Ut',
'-L4Aniqz_zdl8xLXrPsm','-L4Anir1fm_egcoJvFep','-L4Anir5kU5dxs82rNKU','-L4AnirHrRA6S1xnsQji'];
const randomCommentGenerator = () => {
  console.log('in randomCommentGenerator')
  const type = ['rsvp','mandatory', 'announcements'];
  for(let i = 0;i < 50;i++) {
    const obj = {};
    const id = users[Math.round(Math.random()*7)];
    obj[id]= { name : faker.fake("{{name.lastName}} ,{{name.firstName}}"),
    avatarUrl : faker.fake("{{random.image}}")}
    const data = {
      eventId : events[Math.round(Math.random()*8)],
      userId : id,    
      body : faker.fake("{{lorem.paragraphs}}"),
      votes : faker.fake("{{random.number}}"), 
      likedBy : obj,     
      creationDate : new Date(Date.now()).toISOString()
    }
    ref.postNewComment(data, (err)=>{
      console.log(err);
    });    
  }
}

export default randomCommentGenerator;