const Header = (props: HeaderProps) => {
return <header><h1>{props.title}</h1></header>
}

//give props types
interface HeaderProps {
    title: string
}


//give props default parameters
Header.defaultProps = {
    title: ""
}

export default Header
