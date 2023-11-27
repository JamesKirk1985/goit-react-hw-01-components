
export const ProfileDescription = ({ user: { username, tag, location, avatar, stats } }) => {

    return (
        <div>
            <img
                src={avatar}
                alt={username}
                class="avatar" />
            <p class="name">{username}</p>
            <p class="tag">@{tag}</p>
            <p class="location">{location}</p>
        </div>
    )
}
