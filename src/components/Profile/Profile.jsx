
import css from './profile.module.css'

export const Profile = ({ user: { username, tag, location, avatar, stats: {followers, views, likes} } }) => {
    return (
    <>
    <div className={css.profile}>
          <div className={css.description}>
    <img
      src={avatar}
      alt={username}
      className={css.avatar}
      width="100"
      height="100"            />
    <p className={css.name}>{ username}</p>
    <p className={css.tag}>@{ tag}</p>
    <p className={css.location}>{location }</p>
    </div>

    <ul className={css.stats}>
    <li>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>{ followers}</span>
    </li>
    <li>
      <span className={css.label}>Views</span>
      <span className={css.quantity}>{ views}</span>
    </li>
    <li>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>{ likes}</span>
    </li>
  </ul>
        </div>
        </>)
}

