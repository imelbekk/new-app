import React from 'react'
import UsersList from './pages/users/UsresList'
import PostsList from './pages/posts/PostsList'
import CardsList from './pages/cards/CardsList'

export default function App() {
  return (
    <div>
      <UsersList/>
      <PostsList/>
      <CardsList/>
    </div>
  )
}
