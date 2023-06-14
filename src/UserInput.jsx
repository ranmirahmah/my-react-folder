

const UserInput = (props) => {
return (
    <div>
      <input type="text" onChange={props.username}  className=" bg-blue"/>
      
    </div>
  )
}

export default UserInput