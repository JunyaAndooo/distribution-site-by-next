import { Tile } from "../types/tile";
import { useState, useEffect } from "react";
import firebase from "../firebase";

/*
 * Content
 */
interface Props {
  searchWord: string | string[] | undefined;
}

const Images = (props: Props) => {
  const [data, setData] = useState<Tile[]>([]);

  const getData = async (searchWord: string | string[] | undefined) => {
    const db = firebase.firestore();
    const tileDataRef = db.collection("tileData");
    const searchedData = tileDataRef.where(
      "keyword",
      "array-contains",
      searchWord
    );
    const snapShot = await searchedData.get();
    const tempData: unknown[] = [];

    for (const doc of snapShot.docs) {
      tempData.push(doc.data());
    }

    setData(tempData as Tile[]);
  };

  useEffect(() => {
    getData(props.searchWord);
  }, [props.searchWord]);

  return (
    <>
      {data.map((tile) => (
        <div key={tile.title}>
          <img src={tile.image} alt={tile.title} />
          <h3>{tile.title}</h3>
        </div>
      ))}
    </>
  );
};

export default Images;
