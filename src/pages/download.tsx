import { PageFC } from "next";
import { Tile } from "types/tile";
import { useState, useEffect } from "react";
import firebase from "firebase";

type Props = {
  title: string;
  keyword: string;
};

const Donwload: PageFC<Props> = (props: Props) => {
  const [tile, setTile] = useState<Tile | null>(null);

  const getData = async (searchWord: string) => {
    const db = firebase.firestore();
    const tileDataRef = db.collection("tileData");
    const searchedData = tileDataRef.where(
      "keyword",
      "array-contains",
      searchWord
    );
    const snapShot = await searchedData.get();
    const tiles = snapShot.docs.map((doc) => doc.data() as Tile);
    const tile = tiles.length === 0 ? null : tiles[0];

    setTile(tile);
  };

  useEffect(() => {
    getData(props.keyword);
  }, [props.keyword]);

  if (!tile) {
    return <></>;
  }

  return (
    <div>
      <img src={tile.image} alt={tile.title} />
      <h3>{tile.title}</h3>

      <a href={tile.downloadUrl} download>
        <button>ダウンロードする</button>
      </a>
    </div>
  );
};

Donwload.getInitialProps = async ({ query: { keyword } }) => {
  return {
    keyword: typeof keyword === "string" ? keyword : "",
    title: "ダウンロード",
  };
};

export default Donwload;
