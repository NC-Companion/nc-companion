import { auth, githubProvider } from "./firebase";
import * as userRef from './refs/usersRef';
import * as queryUser from './queries/queryUsers';

export const signInWithGitHub = () => {
  return auth.signInWithPopup(githubProvider)
    .then(authUser=>{    
      // console.log('&&&',authUser.user);
      queryUser.getUserById(authUser.user.uid)
        .then(res => {
          console.log('Val',res.val());
          if(res.val() === null) {
            const user = {
              name: authUser.additionalUserInfo.profile.name || authUser.user.displayName ,
              email:authUser.user.email,
              handle:'@' + authUser.user.displayName || 'Anonymous',
              avatarUrl:authUser.additionalUserInfo.profile.avatar_url || 'Alt',
              creationDate: new Date(Date.now()).toISOString(),
              cohort: 'Nov 17',
              subscription: ['global'],
              userType: 'student',
              location : authUser.additionalUserInfo.profile.location || 'Manchester',
              // link: authUser.additionalUserInfo.profile.profile.html_url
            }
            userRef.addNewUser(authUser.user.uid,user);
          }
        })
      return authUser;
    })
};

export const signOut = () => {
  return auth.signOut();
};

export const signInAdmin = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};
