# Plans
Below include plans for the date of 22/01/2018.

## Newsfeed/Firebase Interactivity 
Provided is a block diagram on the proposed interactivity. There are Four key components.
The Newsfeed, Form, Firebase and Update News.

### Newsfeed
The Newsfeed is what the user can see. This is the displaying of news articles. The purpose of the newsfeed is to make "GET" requests from our data store (Firebase). This allows us to see news updating live.

### Form
The form is linked to the newsfeed. An admin can make a "POST" request and send data to be stored in a form. This is stored in Firebase. This consists of a Title, Body(the post), Resources(files/links) and the Date is given from a timestamp. 

### Firebase
This our backend. This is where we store all our data.

### Update News
Is where we can make "PUT" requests. Any user can make PUT requests to post a comment or like a post. Firebase then updates and this newsfeed does a live "GET" request updating the current Newsfeed.






