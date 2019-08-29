class List extends React.Component {
  constructor(){
    super()

    this.state = {
      word:"",
      list : []
    }
  }

  addItem(event){
    let updatedList = this.state.list;
    updatedList.push(this.state.word);
    console.log(updatedList)
    this.setState({list: updatedList});
    this.setState({word:""})
  }

  changeHandler(event){
    console.log(event.target.value);

    let currentValue = event.target.value.trim();
    {
        this.setState({word:currentValue});
    }
  }



  render() {
      // render the list with a map() here

      console.log("rendering");
      return (
        <div className="list">
          <input onChange={(event)=>{this.changeHandler(event)}} value={this.state.word}/>
          <button onClick={(event)=>{this.addItem(event)}}>add item</button>

        <div>
            <ul>
            {this.state.list.map(items => {return <li>{items}</li>})}
            </ul>
        </div>
    </div>
      );
  }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);