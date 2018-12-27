import React,{Component} from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'

class CommentList extends Component{
  static propTypes = {
    handleDeleteComment:PropTypes.func
  }


  componentDidUpdate(){
    console.log('componentDidUpdate');
    console.log(this.props.comments);
  }
  render(){
    return (
        <div>
          {
            this.props.comments.map((comment,i)=>{
              return (<Comment index={i} key={Math.random()} comment={comment} handleDeleteComment={this.props.handleDeleteComment}/>)
            })
          }
        </div>
    )
  }
}
export default CommentList