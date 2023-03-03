import { arrayUnion, arrayRemove, doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../config/firebase";

export const addToCompleteList = async (e, item, type) => {
  e.preventDefault();
  if (auth?.currentUser == null) return;
  if (type == "movie") {
    await updateDoc(doc(db, "users", auth?.currentUser?.uid), {
      "completed.movie": arrayUnion(item),
    });
  } else if (type == "tv") {
    await updateDoc(doc(db, "users", auth?.currentUser?.uid), {
      "completed.tv": arrayUnion(item),
    });
  }
};

export const removeFromCompleteList = async (e, item, type) => {
  e.preventDefault();
  if (auth?.currentUser == null) return;
  if (type == "movie") {
    await updateDoc(doc(db, "users", auth?.currentUser?.uid), {
      "completed.movie": arrayRemove(item),
    });
  } else if (type == "tv") {
    await updateDoc(doc(db, "users", auth?.currentUser?.uid), {
      "completed.tv": arrayRemove(item),
    });
  }
};
