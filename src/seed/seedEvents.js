import faker from 'faker';
import * as ref from '../firebase/refs/eventsRef';
const randomEventGenerator = () => {
  const type = ['rsvp','lecture', 'announcements'];
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
      craetionDate : new Date(Date.now()).toISOString(),
      author :faker.fake("{{name.lastName}} ,{{name.firstName}}"),
      calendarId : faker.fake("{{random.uuid}}"),
      authorUid : faker.fake("{{random.uuid}}")
    }
    ref.postNewEvent(data, (err)=>{
      console.log(err);
    })    
  }
}

export default randomEventGenerator;

