  const faker = require('faker');

  let title = faker.fake("{{system.fileType}} {{hacker.adjective}} {{hacker.verb}} 101")
  let body = faker.fake("{{lorem.paragraphs}}")
  let comment = faker.fake("{{random.words}} {{random.words}}")
  let resources = faker.fake("{{internet.url}}")

  console.log('Title:', title);
  console.log('Body:', body);
  console.log('Comments:', comment);
  console.log('Resources:', resources);