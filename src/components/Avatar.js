import './Avatar.css';

function Avatar({value}) {
  return <img width="400" height="400" alt="avatarcss" src={`https://avatars.dicebear.com/api/miniavs/${value}.svg`}></img>
}
export default Avatar