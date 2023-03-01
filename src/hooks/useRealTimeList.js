import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { auth, db } from "../config/firebase";

function useRealTimeList() {
  const [dataList, setDataList] = useState();

  useEffect(() => {
    if (!auth?.currentUser?.uid) return;
    const unsub = onSnapshot(
      doc(db, "users", auth?.currentUser?.uid),
      (doc) => {
        setDataList(doc?.data());
      }
    );
    return () => {
      unsub;
    };
  }, [auth?.currentUser?.uid]);
  return dataList;
}

export default useRealTimeList;
