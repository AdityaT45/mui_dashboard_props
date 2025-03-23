
import { Box } from '@mui/material'
import Wrapper from './components/Wrapper'
import jsonData from '../data.json'

const App = () => {
  return (
    <>
    <Box sx={{ bgcolor: "#f2f2f2", minHeight: "100vh" }}>
      <Wrapper data={jsonData.newsData}  notification={jsonData.notification} profile={jsonData.profile}  banner={jsonData.banner}  menuItems={jsonData.menuItems}/>
    </Box>
    </>
  )
}

export default App