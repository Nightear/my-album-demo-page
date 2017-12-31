import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as commentAction from './actions/commentAction';

import { Button,  Form, Icon, Divider, Comment} from 'semantic-ui-react'

class Comments extends Component {

  constructor(props){
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

     
    this.state = {
      name: '',
      commentText: '',
    }
  }

  handleCommentChange(e){
    this.setState({
      commentText: e.target.value
    })
  }
  handleNameChange(e){
    this.setState({
      name: e.target.value
    })
  }


  handleSubmit(e){
    e.preventDefault();
    let comment = {
      name: this.state.name,
      commentText: this.state.commentText
    }
    this.setState({
      name: '',
      commentText: ''
    });
    this.props.createComment(comment);
  }


  listView(data, index){
    return (
    <div>
      <Comment.Group>
        <Comment>
          <Comment.Content>
            <Comment.Author as='a'>Author: {data.name}</Comment.Author>

            <Comment.Text key={index}>Comments: {data.commentText}</Comment.Text>
            
          </Comment.Content>

              <Comment.Actions style={{float: 'right',}}>
                <a onClick={(e) => this.deleteComment(e, index)} >Delete</a> 
              </Comment.Actions>
              <Divider hidden />
        </Comment>
      </Comment.Group>
    </div>
    )
  }

  deleteComment(e, index){
    e.preventDefault();
    this.props.deleteComment(index);
  }

  render() {

    return(
      <div className="container">
        <h1>Comments</h1>
        <hr />
        <div>
          { <ul className="list-group">
          {this.props.comments.map((comment, i) => this.listView(comment, i))}
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
    comments: state.comments,

  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createComment: comment => dispatch(commentAction.createComment(comment)),
    deleteComment: index =>dispatch(commentAction.deleteComment(index))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
