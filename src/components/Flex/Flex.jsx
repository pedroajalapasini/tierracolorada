import "./Flex.css";

function Flex(props){
    return (
        <div className="container-flex">{props.children}</div>
    );
    console.log(props);
}

export default Flex;