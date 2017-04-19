import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import GifList from './components/GifList'
import GifModal from './components/GifModal'
import './styles/app.css';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGif:null,
      modalIsOpen:false
    }
  }




  handleTermChange = (term) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;

    fetch(url)
    .then((response)=>{
    return  response.json()
    })
    .then((resp)=>{

      this.setState({gifs:[...resp.data]})

    })
  };

  openModal = (selectedGif) =>{
    console.log("modal open!")
     this.setState({modalIsOpen:true,
     selectedGif:selectedGif});
  }

  closeModal() {
    this.setState({
      modalIsOpen: false,
      selectedGif: null
    });
  }

render() {
  return (
    <div>
      <SearchBar onTermChange={this.handleTermChange} />
      <GifList gifs={this.state.gifs} onGifSelect={selectedGif => this.openModal(selectedGif) } />
      <GifModal modalIsOpen={this.state.modalIsOpen}
                selectedGif={this.state.selectedGif}
                onRequestClose={ () => this.closeModal() }
                contentLabel="No Overlay Click Modal"/>
    </div>



  );
}
}


ReactDOM.render(<App />, document.getElementById('root'));
