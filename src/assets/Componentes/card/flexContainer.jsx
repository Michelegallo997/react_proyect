function FlexContainer(props) {
    const styleFlex = {

      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      gap: "15px",
      
    };
  
    return <div style={styleFlex}>{props.children}</div>;
  }
  
  export default FlexContainer;