import faker from 'faker';
import * as ref from '../firebase/refs/eventsRef';
const randomEventGenerator = () => {
  const type = ['rsvp','lecture', 'announcements'];
  const calendar = ['global','student','cohort'];
  const users = ['-L3muDmrwcStsF5ejww8','-L3muDmwAmk7-m2T5_X_','y1f5muGqhteOF5Z72U05Jx4UPcg1','erzfMpHA0cRNnYsADtwt4YvScJ62',
'U9LA7rS3u2MIwhQmetwbt4WwuXz2','3bT0h3Shn9T8MXlpH5FEOcU8v253','-L3muDn75FgaabJ39eAv','-L3muDn6Q_rtbmkwA49d'];
  for(let i = 0;i < 50;i++) {
    const data = {
      title :faker.fake("{{hacker.phrase}}"),
      type : type[Math.round(Math.random() * 2)],
      body :faker.fake("{{lorem.paragraphs}}"),
      tag : [faker.fake("{{random.word}}"),faker.fake("{{random.word}}"),faker.fake("{{random.word}}")],
      imageUrl : [faker.fake("{{random.image}}"),faker.fake("{{random.image}}"),faker.fake("{{random.image}}")],
      eventDate : faker.fake("{{date.future}}"),
      resources : [{title:faker.fake("{{hacker.phrase}}"), url:faker.fake("{{image.image}}")  }],
      mandatory : faker.fake("{{random.boolean}}"),
      // Auto collected from singend in user ---
      creationDate : new Date(Date.now()).toISOString(),
      author :faker.fake("{{name.lastName}} ,{{name.firstName}}"),
      calendar : calendar[Math.round(Math.random() * 2)],
      authorUid : users[Math.round(Math.random() * 7)]
    }
    ref.postNewEvent(data, (err)=>{
      console.log(err);
    })    
  }
}

export default randomEventGenerator;

