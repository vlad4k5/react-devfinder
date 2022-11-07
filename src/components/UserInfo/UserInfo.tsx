import { GithubUser } from '../../types/user'
import { formatDate } from '../../utils/dateUtils'
import s from './UserInfo.module.scss'

interface UserInfoProps extends GithubUser {}

const UserInfo = (props: UserInfoProps) => {

  return (
    <div className={s.userInfo}>
      <img src={props.avatar_url} className={s.userPhoto} alt="login" />
      <div className={s.userTitle}>
        <h2>{props.name}</h2>
        <h3>{props.login}</h3>
        <span>{formatDate(props.created_at)}</span>
      </div>
    </div>
  )
}

export default UserInfo