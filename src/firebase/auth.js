import { auth, githubProvider } from "./firebase";

export const signInWithGitHub = () => {
  return auth.signInWithPopup(githubProvider);
};

export const signOut = () => {
  return auth.signOut();
};

export const signInAdmin = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};
