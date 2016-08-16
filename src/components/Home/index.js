import React from 'react'
import { connect } from 'react-redux'

import Artwork from 'components/Artwork'

import banner from 'images/caruaru.jpg'

import styles from './index.css'

class Home extends React.Component {
  render() {
    return (
      <div className={styles.component}>
        <div className='banner'>
          <div className='message'>
            <h3>Artesanato</h3> 
            <p>facil, e barato</p>
          </div>
          <img src={banner} />
          <div className='input'>
            <input placeholder='O que voce esta procurando?' />
            <a className='submit'>Procurar</a>
          </div>
        </div>
        <div className='market'>
          {this.props.data.map((datum, i) =>
            <Artwork
              {...datum}
              key={i}
              className={styles.cardSpacing}
            />)
          }
        </div>
      </div>
    );
  }
};

export default connect(state => {
  return {
    data: state.artwork,
  }
})(Home)
