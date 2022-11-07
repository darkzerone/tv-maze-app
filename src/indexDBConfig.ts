export const indexDBConfig = {
  name: "TVMazeDB",
  version: 1,
  objectStoresMeta: [
    {
      store: "shows",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [],
    },
  ],
};
