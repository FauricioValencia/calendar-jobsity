import { connect } from "react-redux";

export default function Connect(component) {
  const mapStateToProps = state => {
    return { state };
  };
  const mapDispatchToProps = dispatch=>{
      return {
          dispatch
      };
  };
  return connect(mapStateToProps, mapDispatchToProps)(component);
}
