import React,{Component} from 'react';
import './Contact.css';
import PropTypes from 'prop-types';




class Contact extends Component{
  
  render(){
    return (
      <div className="Contact">    
      <div>
           <img src={this.props.avatar} alt="avatar" className="avatar" />
      </div>
      <div>
            <div className="status"> 

                 <p className="name">{this.props.name}</p>

                 <div className= { this.props.status ?"status-online" : "status-offline"} />

                 <p className="status-text"> { this.props.status ? "online" : "offline"}</p>

           </div>

       </div>
</div>
);  
}
}
Contact.propTypes = {  
  name: PropTypes.string ,
  status: PropTypes.string,
  avatar: PropTypes.string
};

                                             



export default Contact
