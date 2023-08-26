import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();

const signIn = async () => {
  const auth = getAuth();
  const result = await signInWithPopup(auth, provider).catch((error) => {
    console.error(error.message);
  });

  return result.user;
};

const signOut = async () => {
  const auth = getAuth();
  await auth.signOut();
};

export { signIn, getAuth, signOut };
