import { collection, addDoc } from "firebase/firestore";
import db from "./database";
import { users } from "./data";

const uploadUsers = async () => {
  for (const user of users) {
    try {
      await addDoc(collection(db, "users"), user);
      console.log("Uploaded:", user);
    } catch (error) {
      console.log("Error:", error);
    }
  }
};

uploadUsers();