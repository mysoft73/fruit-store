const AllFruits = (props) => {
  var fruits = props.fruits.map((fruit) => {
    return(
      <div key={fruit.id}>
        <h1>{fruit.name}</h1>
        <p>{fruit.description}</p>
      </div>
    )
  });

  return(
    <div>
      {fruits}
    </div>
  )
}