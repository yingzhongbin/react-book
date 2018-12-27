import React, { Component } from 'react'

class CommentInput extends Component{
  constructor() {
    super()
    this.state = {
      username:'',
      content:''
    }
  }

  componentWillMount(){
    let username = localStorage.getItem('username')
    if(username){
      this.setState({
        username
      })
    }
  }

  componentDidMount(){
    this.textarea.focus()
  }

  _saveUsername(value){
    localStorage.setItem('username',value)
  }

  handleUsernameChange(e){
    this.setState({
      username:e.target.value
    })
  }

  handleContentChange(e){
    this.setState({
      content:e.target.value
    })
  }

  handleSubmit(){
    if(this.props.onSubmit){
      this.props.onSubmit({
        username:this.state.username,
        content:this.state.content,
        createTime:+new Date()
      })
    }
  }

  handleBlur(e){
    this._saveUsername(e.target.value)
  }

  render(){
    return (
        <div className='comment-input'>
          <div className='comment-field'>
            <span className='comment-field-name'>用户名：</span>
            <div className='comment-field-input'>
              <input value={this.state.username} onBlur={this.handleBlur.bind(this)} onChange={this.handleUsernameChange.bind(this)}/>
            </div>
          </div>
          <div className='comment-field'>
            <span className='comment-field-name'>评论内容：</span>
            <div className='comment-field-input'>
              <textarea ref={(textarea)=>{this.textarea = textarea}} onChange={this.handleContentChange.bind(this)}/>
            </div>
          </div>
          <div className='comment-field-button'>
            <button onClick={this.handleSubmit.bind(this)}>
              发布
            </button>
          </div>
        </div>
    )
  }
}
export default CommentInput