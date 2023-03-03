import { arrayUnion, arrayRemove, doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../config/firebase";

export const addToWatchList = async (e, item, type) => {
  e.preventDefault();
  if (auth?.currentUser == null) return;
  if (type == "movie") {
    await updateDoc(doc(db, "users", auth?.currentUser?.uid), {
      "watchlist.movie": arrayUnion(item),
    });
  } else if (type == "tv") {
    await updateDoc(doc(db, "users", auth?.currentUser?.uid), {
      "watchlist.tv": arrayUnion(item),
    });
  }
};

export const removeFromWatchList = async (e, item, type) => {
  e.preventDefault();
  if (auth?.currentUser == null) return;
  if (type == "movie") {
    await updateDoc(doc(db, "users", auth?.currentUser?.uid), {
      "watchlist.movie": arrayRemove(item),
    });
  } else if (type == "tv") {
    await updateDoc(doc(db, "users", auth?.currentUser?.uid), {
      "watchlist.tv": arrayRemove(item),
    });
  }
};
