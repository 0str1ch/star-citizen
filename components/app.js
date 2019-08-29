import React from 'react'
import PropTypes from 'prop-types'
import {
  RefinementList,
  SearchBox,
  Hits,
  Configure,
  Highlight,
  Pagination
} from 'react-instantsearch/dom'
import { InstantSearch } from './instantsearch'

const HitComponent = ({ hit }) => (
  <div className='hit'>
    <div>
      <div className='hit-picture'>
        <img src={`${hit.media}`} />
      </div>
    </div>
    <div className='hit-content'>
      <div>
        <Highlight attributeName='name' hit={hit} />
        <span> - {hit.name}</span>
        <span> - {hit.manufacturer}</span>
      </div>
      <div className='hit-type'>
        <Highlight attributeName='type' hit={hit} />
      </div>
      <div className='hit-description'>
        <Highlight attributeName='description' hit={hit} />
      </div>
    </div>
  </div>
)

HitComponent.propTypes = {
  hit: PropTypes.object
}

export default class extends React.Component {
  static propTypes = {
    searchState: PropTypes.object,
    resultsState: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onSearchStateChange: PropTypes.func
  }

  render () {
    return (
      <InstantSearch
        appId='6IY46XKPVP' // change this
        apiKey='53f9d16117669ff762a06d0538e41ad1' // change this
        indexName='sc-ships' // change this
        resultsState={this.props.resultsState}
        onSearchStateChange={this.props.onSearchStateChange}
        searchState={this.props.searchState}
      >
        <Configure hitsPerPage={10} />
        <header>
          <h1>Star Citizen Ship Index</h1>
          <SearchBox />
        </header>
        <content>
          <menu>
            <RefinementList attribute="name" />
          </menu>
          <results>
            <Hits hitComponent={HitComponent} />
          </results>
        </content>
        <footer>
          <Pagination />
          <div>
            
          </div>
        </footer>
      </InstantSearch>
    )
  }
}
