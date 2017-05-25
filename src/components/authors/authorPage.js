"use strict";

var React = require('react');
var AuthorAPi = require('../../api/authorApi');

var Author = React.createClass({
    getInitialState: function () {
        return {
            author: []
        };
    },

    componentWillMount: function () {
        this.setState({authors: AuthorAPi.getAllAuthors()});
    },

    render: function () {
        var createAuthorRow = function (author) {
            return (
                <tr key={author.id}>
                    <td><a href={"/#authors/" + author.id}>{author.id}</a></td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>
            );
        };

        return (
            <div>
                <h1>Authors</h1>

                <table className="table">
                    <thead>
                        <th>ID</th>
                        <th>name</th>
                    </thead>

                    <tbody>
                        {this.state.authors.map(createAuthorRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = Author;
