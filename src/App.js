import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import ContextController from './ContextConfiguration/configurationcontext'
import ProtectedRoute from './components/ProtectedRoute'
import TrendingRoute from './components/TrendingRoute'
import GamingRoute from './components/GamingRoute'
import VideoDetailRoute from './components/VideoDetailRoute'
import SavedVideosRoute from './components/savedRoute'
import NotFound from './components/NotFoundRoute'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isDarkPage: true, savedVideosList: []}

  changeThemeOfPage = () => {
    this.setState(prevState => ({isDarkPage: !prevState.isDarkPage}))
  }

  saveVideosInToArray = videosList => {
    const {savedVideosList} = this.state
    const filterArray = savedVideosList.filter(
      each => each.id === videosList.id,
    )
    if (filterArray.length === 0) {
      this.setState({savedVideosList: [...savedVideosList, videosList]})
    } else {
      const remainingArray = savedVideosList.filter(
        each => each.id !== videosList.id,
      )
      this.setState({savedVideosList: [...remainingArray]})
    }
  }

  render() {
    const {isDarkPage, savedVideosList} = this.state

    return (
      <ContextController.Provider
        value={{
          isDark: isDarkPage,
          changeTheme: this.changeThemeOfPage,
          saveVideo: this.saveVideosInToArray,
          savedVideos: savedVideosList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={HomeRoute} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoDetailRoute}
          />

          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideosRoute}
          />

          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ContextController.Provider>
    )
  }
}

export default App
