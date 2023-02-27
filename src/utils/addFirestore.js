import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../config/firebase";

const addItem = async (e, item, type) => {
  e.preventDefault();
  if (auth?.currentUser == null) return;
  if(type == 'movie'){
    await updateDoc(doc(db, "users", auth?.currentUser?.uid), {
      "favourite.movie": arrayUnion(item),
    });
  }
  await updateDoc(doc(db, "users", auth?.currentUser?.uid), {
    "favourite.tv": arrayUnion(item),
  });
};

export default addItem