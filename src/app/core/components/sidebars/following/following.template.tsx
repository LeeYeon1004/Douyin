import { useEffect, useState } from "react";
import { Users } from "../../../models/users.interface";
import { getUsers } from "../../../services/api.config";
import Main from "../../video-home/main.template";

function Following() {
  const [accountItem, setAccountItem] = useState<Users[]>([]);

  useEffect(() => {
    callItem();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const callItem = async () => {
    const getItem = await getUsers();
    setAccountItem(
      getItem.filter((item: { following: boolean }) => item.following === true)
    );
  };
  return (
    <>
      <Main accountItem={accountItem} followBtn="hidden" />
    </>
  );
}

export default Following;
