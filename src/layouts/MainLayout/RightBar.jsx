import React from 'react'
import Card from '../../components/Card'
import SearchBar from '../../components/Searchbar'

const RightBar = () => {
  return (
    <div id="rightbar">
      <SearchBar />

      <Card title='Öneriler'>
        <div className="card-body">
          <span>önerilen kullanıcılar</span>
        </div>
      </Card>
    </div>
  )
}

export default RightBar