import { arrayUnion, arrayRemove, doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../config/firebase";

export const addItem = async (e, item, type) => {
  e.preventDefault();
  if (auth?.currentUser == null) return;
  if (type == "movie") {
    await updateDoc(doc(db, "users", auth?.currentUser?.uid), {
      "favourite.movie": arrayUnion(item),
    });
  } else if (type == "tv") {
    await updateDoc(doc(db, "users", auth?.currentUser?.uid), {
      "favourite.tv": arrayUnion(item),
    });
  }
};

export const removeItem = async (e, item, type) => {
  e.preventDefault();
  if (auth?.currentUser == null) return;
  if (type == "movie") {
    await updateDoc(doc(db, "users", auth?.currentUser?.uid), {
      "favourite.movie": arrayRemove(item),
    });
  } else if (type == "tv") {
    await updateDoc(doc(db, "users", auth?.currentUser?.uid), {
      "favourite.tv": arrayRemove(item),
    });
  }
};
