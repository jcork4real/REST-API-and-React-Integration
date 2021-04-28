import React, { Component } from 'react'

export class BookItem extends Component {
    render() {
        const { title, excerpt } = this.props.book;
        return (
            <div>
                <h2>{title.rendered}</h2>
                <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }}></div>
            </div>
        )
    }
}

export default BookItem;