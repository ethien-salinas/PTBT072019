import React from 'react';
import Pais from './components/Pais'
import Tour from './components/Tour'

class App extends React.Component {

  state = {
    paises: [
      {
        imagen: 'https://via.placeholder.com/140x100',
        nombre: 'México'
      },
      {
        imagen: 'https://via.placeholder.com/140x100',
        nombre: 'Brasil'
      },
      {
        imagen: 'https://via.placeholder.com/140x100',
        nombre: 'Argentina'
      },
      {
        imagen: 'https://via.placeholder.com/140x100',
        nombre: 'Colombia'
      },
    ],
    tours: []
  }

  componentDidMount() {
    fetch('https://bedu-travels-node.herokuapp.com/tours')
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        this.setState({
          tours: jsonData.data
        })
      });
    console.log(this.state.tours)
  }

  render() {
    return (
      <>
        <h1>Hola React State</h1>
        {/* <Pais pais={this.state.paises[0]}></Pais> */}
        {
          this.state.paises.map((pais) => {
            return <Pais pais={pais}></Pais>
          })
        }
        {
          this.state.tours.map((tour) => {
            return <Tour tour={tour}></Tour>
          })
        }
      </>
    )
  }
}

export default App;
