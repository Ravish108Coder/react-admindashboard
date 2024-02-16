import toast from "react-hot-toast"

const Home = () => {
    return (
        <div>
            <div onClick={() => { toast.success('All bookings') }}>Home</div>
        </div>
    )
}

export default Home