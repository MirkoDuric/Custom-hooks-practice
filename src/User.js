export default function User(props) {
  return (
    <div>
      <img src={props.img}></img>
      <p>{props.firstName}</p>
      <p>{props.lastName}</p>
      <p>{props.email}</p>
    </div>
  );
}
