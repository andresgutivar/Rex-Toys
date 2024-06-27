import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";

import { db } from "../App";
import { v4 as uuid } from "uuid";

// CRUD: Create, Read, Update, Delete
export const createDocument = async (table, data, callback) => {
  try {
    data.id = uuid();
    await setDoc(doc(db, table, data.id), data);
    callback(data.id);
  } catch (err) {
    if (err.message.includes("mustEnterValidName")) {
      throw new Error(err.message);
    }

    console.error(
      "Error in: services -> authentication -> createDocument",
      "Error message: ",
      err
    );
    throw new Error("unexpectedErrorHappened");
  }
};

export const readDocumentById = async (table, id, callback) => {
  try {
    let data = await getDoc(doc(db, table, id));
    callback(data.data());
  } catch (err) {
    console.error(
      "Error in: services -> database -> readDocumentById",
      "Table: ",
      table,
      "Error message: ",
      err
    );
  }
};

export const readDocumentByIdRealTime = (table, id, callback) => {
  try {
    return onSnapshot(doc(db, table, id), (document) => {
      callback(document.data());
    });
  } catch (err) {
    console.error(
      "Error in: services -> database -> readDocumentByIdRealTime",
      "Table: ",
      table,
      "Error message: ",
      err
    );
  }
};

export const readTable = async (table, callback, whereInstructions = null) => {
  try {
    let querySnapshot;
    if (whereInstructions) {
      querySnapshot = await getDocs(
        query(
          collection(db, table),
          where(
            whereInstructions[0],
            whereInstructions[1],
            whereInstructions[2]
          )
        )
      );
    } else {
      querySnapshot = await getDocs(collection(db, table));
    }
    let data = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    callback(data);
  } catch (err) {
    console.error(
      "Error in: services -> database -> readTable",
      "Table: ",
      table,
      "Error message: ",
      err
    );
  }
};

export const readTableRealTime = (
  table,
  callback,
  whereInstructions = null
) => {
  try {
    if (whereInstructions) {
      return onSnapshot(
        query(
          collection(db, table),
          where(
            whereInstructions[0],
            whereInstructions[1],
            whereInstructions[2]
          )
        ),
        (data) => {
          let result = [];
          if (data) {
            for (const doc of data.docs) {
              result.push(doc.data());
            }
          }
          callback(result);
        }
      );
    } else {
      return onSnapshot(collection(db, table), (data) => {
        let result = [];
        if (data) {
          for (const doc of data.docs) {
            result.push(doc.data());
          }
        }
        callback(result);
      });
    }
  } catch (err) {
    console.error(
      "Error in: services -> database -> readTableRealTime",
      "Table: ",
      table,
      "Error message: ",
      err
    );
  }
};

export const updateDocumentById = async (table, id, data) => {
  try {
    await updateDoc(doc(db, table, id), data);
  } catch (err) {
    console.error(
      "Error in: services -> database -> updateDocumentById",
      "Table: ",
      table,
      "Error message: ",
      err
    );
  }
};

export const deleteDocumentById = async (table, id) => {
  try {
    await deleteDoc(doc(db, table, id));
  } catch (err) {
    console.error(
      "Error in: services -> database -> deleteDocumentById",
      "Table: ",
      table,
      "Error message: ",
      err
    );
  }
};
