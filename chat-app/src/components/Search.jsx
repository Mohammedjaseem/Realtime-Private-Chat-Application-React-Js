import React from 'react'

const Search = () => {
  return (
    <div className='search'>
        <div className='searchForm'>
          <input type='text' placeholder='Find a user' />
        </div>
        <div className="userChat">
            <img src="https://i.pinimg.com/236x/c5/d5/44/c5d54481b5094dbc7d84f7ce1b0c0f18.jpg" alt="" />
            <div className="userChatInfo">
              <span>Jassy</span>
            </div>
        </div>
    </div>
  )
}

export default Search