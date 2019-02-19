class Fruit extends React.Component{
  
  render(){
    return(
      <div>
        <h1>{this.props.fruit.name}</h1>
        <p>{this.props.fruit.description}</p>
        <button onClick={() => this.props.handleDelete(this.props.fruit.id)}>Delete</button>
      </div>
    )      
  }
}