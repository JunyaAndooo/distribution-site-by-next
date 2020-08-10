import { AuthContext } from "components/common/authProvider";
import firebase from "firebase";
import { PageFC } from "next";
import Router from "next/router";
import { useContext, useEffect, useState } from "react";
import { Tile } from "types/tile";

type Props = {
  title: string;
  keyword: string;
};

const Donwload: PageFC<Props> = (props: Props) => {
  const [tile, setTile] = useState<Tile | null>(null);
  const authContext = useContext(AuthContext);

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
    if (authContext.user) {
      getData(props.keyword);
    } else {
      Router.push("/");
    }
  }, [props.keyword, authContext.user]);

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
