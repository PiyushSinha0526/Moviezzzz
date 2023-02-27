import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "../config/firebase";

function useGetList(fav, type, deps) {
  const [favourite, setFavourite] = useState([]);

  useEffect(() => {
    let getDocumnet;
    if (!auth.currentUser) return;
    getDocumnet = async () => {
      const docRef = doc(db, "users", auth?.currentUser?.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setFavourite(docSnap?.data()?.[fav]?.[type]);
      }
    };
    return () => {
      getDocumnet?.();
    };
  }, [auth.currentUser,deps]);
  return favourite;
}

export default useGetList;
