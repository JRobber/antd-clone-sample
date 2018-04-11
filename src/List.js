import React, { Component } from 'react';
import PropTypes from 'prop-types';

const data = [
    { title: "Title 1", text: "Text 1" },
    { title: "Title 2", text: "Text 2" },
    { title: "Title 3", text: "Text 3" },
    { title: "Title 4", text: "Text 4" },
    { title: "Title 5", text: "Text 5" },
]

function ListDemo() {
    return <div>
        <List data={data} renderItem={
            (item) => (
                <ListItem renderTitle={
                    () => <div>{item.title}</div>
                }
                    renderText={
                        () => <div>{item.text}</div>
                    }
                />
            )
        } />
    </div>
}

function List(props) {
    const items = props.data.map(props.renderItem)
    return <div>
        {items}
    </div>
}

function ListItem(props) {
    return (
        <div className="card">
            {props.renderTitle()}
            {props.renderText()}
            <footer><button>Like</button></footer>
        </div>
    )
}

List.propTypes = {
    data: PropTypes.array
}



export default ListDemo;