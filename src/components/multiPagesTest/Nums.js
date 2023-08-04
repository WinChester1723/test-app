import React from "react";

class Nums extends React.Component {
  render() {
    return (
        <div>
            <NumberList numbers={numbers} />
            <Blog posts ={posts}/>
        </div>
    );
  }
}
const numbers = [1, 2, 3, 4, 5];

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    <ListItems key={number.toString()} value={number * 2} />
  ));

  return <ul>{listItems}</ul>;
}

function ListItems(props) {
  return <li>{props.value}</li>;
}


function Blog(props){
    const sidebar = (
        <ul>
            {props.posts.map((post) => 
                <li key={post.id}>{post.title}</li>
            )}
        </ul>
    );

    const content = props.posts.map((post) => 
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );
    return (
        <div>
            {sidebar}
            <hr/>
            {content}
        </div>
    );
}

const posts = [
    {id: 1, title: 'Привет, мир', content: 'Добро пожаловать в документацию React!'},
    {id: 2, title: 'Установка', content: 'React можно установить из npm.'}
  ];

export default Nums;
