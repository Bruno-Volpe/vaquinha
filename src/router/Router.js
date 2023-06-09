import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Change from '../components/Change'
import Main from '../components/Main'

const RoutesChange = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/change" element={<Change />} />
                <Route path="*" element={<Main />} />
            </Routes>
        </BrowserRouter>
    )
}
export default RoutesChange