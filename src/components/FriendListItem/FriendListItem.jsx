import clsx from "clsx";
import css from "../FriendList/FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <ul className={css.friendsList}>
        <li className={css.friendsListItem}>
          <img
            className={css.friendsImg}
            src={avatar}
            alt="Avatar"
            width="48px"
          />
          <p className={css.friendsName}>{name}</p>
          <p
            className={clsx(css.friendsStatus, {
              [css.statusIsOnline]: isOnline === true,
              [css.statusIsOffline]: isOnline === false,
            })}
          >
            {isOnline === true ? "Online" : "Offline"}
          </p>
        </li>
      </ul>
    </>
  );
};

export default FriendListItem;
