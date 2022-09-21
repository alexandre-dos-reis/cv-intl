export const Profile = (props: { subtitle: string }) => {
  return (
    <div className="box profile">
      <img id="identity" src="./photo.jpg" alt="Photo ID" />
      <h1 className="txt-center">Alexandre&nbsp;Dos&nbsp;Reis</h1>
      <h3>{props.subtitle}</h3>
    </div>
  )
}
