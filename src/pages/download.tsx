import { AuthContext } from "components/common/authProvider";
import firebase from "firebase";
import { PageFC } from "next";
import { useRouter } from "next/router";
import { useContext } from "react";
import { Tile } from "types/tile";

const getData = async (searchWord: string): Promise<Tile[]> => {
  const db = firebase.firestore();
  const tileDataRef = db.collection("tileData");
  const searchedData = tileDataRef.where(
    "keyword",
    "array-contains",
    searchWord
  );
  const snapShot = await searchedData.get();
  const tiles = snapShot.docs.map((doc) => doc.data() as Tile);
  return tiles;
};

type Props = {
  title: string;
  tiles: Tile[];
};

const Download: PageFC<Props> = (props: Props) => {
  const authContext = useContext(AuthContext);
  if (!authContext.authenticated) {
    const router = useRouter();
    router.push("/");
    return <></>;
  }

  return (
    <>
      {props.tiles.map((tile) => (
        <div key={tile.title}>
          <img src={tile.image} alt={tile.title} />
          <h3>{tile.title}</h3>
          <a href={tile.downloadUrl} download>
            <button>ダウンロードする</button>
          </a>
        </div>
      ))}
    </>
  );
};

Download.getInitialProps = async ({ query: { keyword } }) => {
  const tiles =
    (await getData(typeof keyword === "string" ? keyword : "")) || [];

  return {
    title: "ダウンロード",
    tiles: tiles,
  };
};

export default Download;
