const ObjectsComponent=()=>{
    const Person={
        name:"Rekha",
        id:6666,
        mail:"abc.com",
        phone:9581956132
       }
    return(
        <ul>
            <li>{Person.name}</li>
            <li>{Person.id}</li>
            <li>{Person.mail}</li>
            <li>{Person.phone}</li>
            </ul>
    )   
}
export default ObjectsComponent