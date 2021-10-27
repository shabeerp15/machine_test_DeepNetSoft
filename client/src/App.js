import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CreateProduct from './pages/CreateProduct'
import Login from './pages/Login'
import Produts from './pages/Produts'
import Register from './pages/Register'

function App() {
    return (
        <Router>
            <Route exact path='/'>
                <Register />
            </Route>
            <Route  path='/login'>
                <Login />
            </Route>
            <Route  path='/products'>
                <Produts />
            </Route>
            <Route  path='/addProduct'>
                <CreateProduct />
            </Route>
        </Router>
    )
}

export default App
