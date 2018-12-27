import React, {Component} from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import './comment.css'

class CommentApp extends Component {
  constructor(){
    super()
    this.state = {
      comments:[]
    }
  }

  componentWillMount(){
    this._loadComments()
  }

  _loadComments(){
    let comments = JSON.parse(localStorage.getItem('comments'))
    console.log(comments);
    if(comments){
      this.setState({
        comments
      })
    }
  }

  _saveComments(comments){
    localStorage.setItem('comments',JSON.stringify(comments))
  }

  handleSubmitContent(comment){
    if(!comment.username){
      return alert('请输入用户名')
    }
    if(!comment.content){
      return alert('请输入评论内容')
    }
    let comments = this.state.comments
    comments.push(comment)
    this.setState({
      comments
    })
    this._saveComments(comments)
  }

  handleDeleteComment(index){
    let comments = this.state.comments
    console.log(comments);
    comments.splice(index,1)
    console.log(index);
    console.log(comments);
    this.setState({
      comments
    })
    console.log(comments);
    this._saveComments(comments)
  }

  render() {
    return (
        <div className='wrapper'>
          <CommentInput onSubmit={this.handleSubmitContent.bind(this)}/>
          <CommentList comments={this.state.comments} handleDeleteComment={this.handleDeleteComment.bind(this)}/>
        </div>
    )
  }
}
export default CommentApp