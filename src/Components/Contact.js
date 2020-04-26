import React,{Component} from 'react';
import "./Contact.css";
import PropTypes from "prop-types";




class Contact extends Component {
  
  render(props){
    return (
      <div className="Contact">    
      <div>
           <img src={this.props.avatar} alt= "avatar" className= "avatar" />
      </div>
      <div>
            <div className="status"> 

                 <p className="name">{this.props.name} </p>

                 <div className= {this.props.online ? "status-online" : "status-offline"} />

                 <p className="status-text"> {this.props.online ? "online" : "offline"} </p>
               
           </div>

       </div>
      
</div>
);  
}
}
Contact.propTypes = {  
  name: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired
};


export default Contact
