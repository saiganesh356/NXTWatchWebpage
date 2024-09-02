import React from 'react'

const ContextController = React.createContext({
  isDark: false,
  changeTheme: () => {},
  savedVideos: [],
  saveVideo: () => {},
})

export default ContextController
