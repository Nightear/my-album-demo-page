import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as contactAction from './actions/contactAction';

import { Button,  Form, Icon, Divider, Comment} from 'semantic-ui-react'

class Comments extends Component {

  constructor(props){
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

     
    this.state = {
      name: '',
      comment: '',
    }
  }

  handleCommentChange(e){
    this.setState({
      comment: e.target.value
    })
  }
  handleNameChange(e){
    this.setState({
      name: e.target.value
    })
  }


  handleSubmit(e){
    e.preventDefault();
    let contact = {
      name: this.state.name,
      comment: this.state.comment
    }
    this.setState({
      name: '',
      comment: ''
    });
    this.props.createContact(contact);
  }


  listView(data, index){
    return (
/*      <div className="row">
        <div className="col-md-10">
          <li key={index} className="list-group-item clearfix">
            {data.name}
          </li>
        </div>
        <div className="col-md-2">
          <button onClick={(e) => this.deleteContact(e, index)} className="btn btn-danger">
            Remove
          </button>
        </div>
    </div> 
*/
    <div>
      <Comment.Group>
        <Comment>
          <Comment.Content>
            <Comment.Author as='a'>Author: {data.name}</Comment.Author>

            <Comment.Text key={index}>Comments: {data.comment}</Comment.Text>
            
          </Comment.Content>

              <Comment.Actions style={{float: 'right',}}>
                <a onClick={(e) => this.deleteContact(e, index)} >Delete</a> 
              </Comment.Actions>
              <Divider hidden />
        </Comment>
      </Comment.Group>
    </div>
    )
  }

  deleteContact(e, index){
    e.preventDefault();
    this.props.deleteContact(index);
  }

  render() {

    return(
      <div className="container">
        <h1>Comments</h1>
        <hr />
        <div>
          { <ul className="list-group">
          {this.props.contacts.map((contact, i) => this.listView(contact, i))}
        </ul> }

          <Form onSubmit={this.handleSubmit}>
             
            <input placeholder="Name" onChange={this.handleNameChange} value={this.state.name} />
            <Divider hidden />
            <textarea rows="10" placeholder="Enter comments" onChange={this.handleCommentChange} className="form-control" value={this.state.comment} /><br />
            <Divider hidden />

            <div style={{float: 'right',}}><Button content='Add Comment' type="submit" labelPosition='right' icon='edit' primary /></div>
          </Form>          
                <Divider hidden />
                <Divider hidden />

                <div>
                  <Icon name ='twitter square' size = 'large' color='violet' />
                  <Icon name ='facebook square' size = 'large' color='violet' />
                  <Icon name ='google plus square' size = 'large' color='violet' />
                  <Icon name ='weibo' size = 'large' color='violet' />
                  <Icon name ='wechat' size = 'large' color='violet' />
                </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    contacts: state.contacts,

  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createContact: contact => dispatch(contactAction.createContact(contact)),
    deleteContact: index =>dispatch(contactAction.deleteContact(index))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);