import UserClass from "./UserClass"

const AboutComponent = () => {
    return (
        <div className="mx-56 flex flex-col items-center">
            <h2 className="text-center font-bold text-2xl m-4 p-4">About Us.... nope about Me 😎</h2>
            <UserClass name='Mubashshir Majeed' location='Allahabad'/>
        </div>
    )
}
export default AboutComponent