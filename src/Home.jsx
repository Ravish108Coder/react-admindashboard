import { useEffect } from "react"
import toast from "react-hot-toast"

const Home = () => {
    useEffect(() => {
        setTimeout(() => {
            toast.success('Checkout Dashboard Page for more details')
        }, 1000)
        
        toast.success('Welcome to Home page')
    }, [])
    return (
        <div className="px-3 py-4">
            <div >
            <img className="w-100" src={'https://www.pushengage.com/wp-content/uploads/2022/02/Best-Website-Welcome-Message-Examples.png'} alt="Welcome" />
            </div>
        </div>
    )
}

export default Home