import { useState, useEffect } from "react";
import "./forYou.style.scss";
import Main from "../../video-home/main.template";
import { Users } from "../../../models/users.interface";
import { getUsers } from "../../../services/api.config";

function ForYou() {
  const [accountItem, setAccountItem] = useState<Users[]>([]);

  useEffect(() => {
    callItem();
  }, []);
  const callItem = async () => {
    const getItem = await getUsers();
    setAccountItem(getItem);
  };
  return (
    <>
      <Main accountItem={accountItem} followBtn="block" />
    </>
  );
}

export default ForYou;
