import "./Navbar.css"

const Navbar: React.FC<{title: string}> = ({title}) => {
    return <div className="navbar"> <h1> {title} </h1> </div>
}

export default Navbar
