import Dexie, { Table } from "dexie";
import { Show } from "./api/tvMaze/types";

export class MySubClassedDexie extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  shows!: Table<{ page: number; shows: Show[] }>;

  constructor() {
    super("TVMazeDB");
    this.version(1).stores({
      shows: "++id, page, shows", // Primary key and indexed props
    });
  }
}

export const db = new MySubClassedDexie();
