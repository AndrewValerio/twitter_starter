import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox(props) {
  console.log(props)
  const {tweets} = props
  function handleOnTweetTextChange(e){
      props.setTweetText(e.target.value)
  }
  const handleOnSubmit = () => {
    const newTweet = {
      name: props.userProfile?.name,
      handle: props.userProfile?.handle,
      text: props.tweetText,
      comments: 0,
      retweets: 0,
      likes: 0,
      //id: props.tweets.length,
    }
    //props.setTweets(props.tweets.concat(newTweet))
    //setTweets(obj) => [...tweets];
    props.setTweets((oldTweets) => [...oldTweets, {...newTweet, id: oldTweets.length}])
    props.setTweetText("")
    console.log(newTweet.text)
  }
  return (
    <div className="tweet-box">
      <TweetInput value={props.tweetText} handleOnChange={handleOnTweetTextChange}/>

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount value={props.tweetText}/>
        <TweetSubmitButton handleOnSubmit={handleOnSubmit}/>
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {
  console.log(props)
  if((140 - props.value.length) < 0){
    return <span class = "red">{(140 - props.value.length)}</span>
  }
  else{
    return <span>{(140 - props.value.length)}</span>
  }
}

export function TweetSubmitButton(props) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" onClick = {props.handleOnSubmit}>Tweet</button>
    </div>
  )
}
