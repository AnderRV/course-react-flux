"use strict";

var React = require('react');

var About = React.createClass({
    statics: {
        willTransitionTo: function (transition, params, query, callback) {
            if (!confirm('sure want to go there?')) {
                transition.abort();
            } else {
                callback();
            }
        },

        willTransitionFrom: function (transition, component) {
            if (!confirm('sure want to leave?')) {
                transition.abort();
            }
        }
    },

    render: function () {
        return (
            <div>
                <h1>About</h1>
                <ul>
                    <li>React</li>
                    <li>React Router</li>
                </ul>
            </div>
        );
    }
});

module.exports = About;
