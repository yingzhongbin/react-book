import React,{Component} from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {
  static defaultProps = {
    comment:{
    }
  }

  static propTypes = {
    comment: PropTypes.object.isRequired,
    handleDeleteComment:PropTypes.func.isRequired

  }


  constructor(){
    super()
    this.state = {
    }
  }

  componentWillMount(){
    this.setState({
      username:this.props.comment.username,
      content:this.props.comment.content,
    })
    console.log(this.props.comment);
    this._formatCreateTime()
  }

  componentDidMount(){
    this.timer = setInterval(()=>{
      this._formatCreateTime()
    },5000)
  }

  componentWillUnmount(){
    clearInterval(this.timer)
  }

  _formatCreateTime () {
    const comment = this.props.comment
    const duration = (+Date.now() - comment.createTime) / 1000
    let timeString = ""
    if(duration <= 60){
      timeString = `${Math.round(Math.max(duration, 1))} 秒前`
    }else if(duration / 60 < 60){
      timeString = `${Math.round(duration / 60)} 分钟前`
    }else if(duration / 60 /60 < 24){
      timeString = `${Math.round(duration / 60 / 60)} 小时前`
    }else if(duration / 60 /60 /24 < 30){
      timeString = `${Math.round(duration / 60 / 60 / 24)} 天前`
    }else if(duration / 60 /60 /24 /30 < 12){
      timeString = `${Math.round(duration / 60 / 60 / 24 /30)} 月前`
    }
    else{
      timeString = `${Math.round(duration / 60 / 60 / 24 /30 /12)} 年前`
    }
    this.setState({
      createTime: timeString
    })

  }

  _getProcessedContent(content){
    return content
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
        .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
  }

  handleDelete(){
    if(this.props.handleDeleteComment){
      this.props.handleDeleteComment(this.props.index)
    }
  }

  render(){
    return (
        <div className='comment'>
          <div className='comment-user'>
            <span>{this.state.username} </span>：
          </div>
          <p dangerouslySetInnerHTML={{ __html:this._getProcessedContent(this.state.content)}}>
          </p>
          <span className='comment-createdtime'>
             {this.state.createTime}
          </span>
          <span className='comment-delete' onClick={this.handleDelete.bind(this)}>
            删除
          </span>
        </div>
    )
  }
}
export default Comment