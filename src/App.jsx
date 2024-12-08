import { Button } from '@mui/material'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6">
        <h1 className="text-2xl font-bold mb-4">
          MUI + Tailwind Example
        </h1>
        <Button variant="contained" className="mb-4">
          MUI Button
        </Button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Tailwind Button
        </button>
      </div>
    </div>
  )
}

export default App