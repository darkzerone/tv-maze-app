import Dexie, { Table } from "dexie";
import { Show, ShowDetail } from "./api/tvMaze/types";

export class MySubClassedDexie extends Dexie {
  shows!: Table<{ page: number; shows: Show[] }>;
  show!: Table<{ showId: string; show: ShowDetail }>;

  constructor() {
    super("TVMazeDB");
    this.version(1).stores({
      shows: "++id, page, shows",
      show: "++id, showId, show",
    });
  }
}

export const db = new MySubClassedDexie();
