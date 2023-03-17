import { useEffect, useState } from "react";
import { IDBPDatabase, openDB, DBSchema } from "idb";
import { nanoid } from "nanoid";

const DB_NAME = 'my-db'
const DB_VERSION = 1
enum DBStore {
  Todo = 'todo'
}

export interface ITodoStore {
  id: string;
  text: string;
}

interface IDatabases extends DBSchema {
  [DBStore.Todo]: {
    key: string;
    value: ITodoStore;
    indexes: { 
      text: string;
    }
  };
}

export default function useDatabase() {
  const [db, setDb] = useState<IDBPDatabase<IDatabases> | null>(null)

  useEffect(() => {
    (async function() {
      const database = await openDB<IDatabases>(DB_NAME, DB_VERSION, {
        upgrade(db) {
          const objectStore = db.createObjectStore(DBStore.Todo, { keyPath: "id" });
          objectStore.createIndex("text", "text", { unique: false });
        }
      })

      setDb(database)
    }())
  }, [])

  async function addTodo(text: string) {
    if (!db) return console.log('Database not initialized!')

    const transaction = db.transaction(DBStore.Todo, 'readwrite')
    const objectStore = transaction.objectStore(DBStore.Todo)
    await objectStore.add({
      id: nanoid(),
      text,
    })
  }
  
  async function getAllTodo() {
    if (!db) {
      console.log('Database not initialized!')
      return;
    }

    const transaction = db.transaction(DBStore.Todo, 'readonly')
    const objectStore = transaction.objectStore(DBStore.Todo)
    return await objectStore.getAll()
  }

  async function deleteTodo(id: string) {
    if (!db) {
      console.log('Database not initialized!')
      return;
    }

    const transaction = db.transaction(DBStore.Todo, 'readwrite')
    const objectStore = transaction.objectStore(DBStore.Todo)
    await objectStore.delete(id)
  }
  
  return {
    db,
    addTodo,
    getAllTodo,
    deleteTodo
  }
}