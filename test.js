/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module hast:util:sectioning
 * @fileoverview Test suite for `sectioning`.
 */

'use strict';

/* eslint-env node */

/*
 * Module dependencies.
 */

var test = require('tape');
var sectioning = require('./index.js');

/*
 * Tests.
 */

test('sectioning', function (t) {
    t.equal(
        sectioning(),
        false,
        'should return `false` without node'
    );

    t.equal(
        sectioning(null),
        false,
        'should return `false` with `null`'
    );

    t.equal(
        sectioning({
            'type': 'text'
        }),
        false,
        'should return `false` when without `element`'
    );

    t.equal(
        sectioning({
            'type': 'element'
        }),
        false,
        'should return `false` when with invalid `element`'
    );

    t.equal(
        sectioning({
            'type': 'element',
            'tagName': 'a',
            'properties': {
                'href': '#alpha',
                'title': 'Bravo'
            },
            'children': [{
                'type': 'text',
                'value': 'Charlie'
            }]
        }),
        false,
        'should return `false` when without not sectioning'
    );

    t.equal(
        sectioning({
            'type': 'element',
            'tagName': 'article',
            'children': [{
                'type': 'element',
                'tagName': 'p',
                'children': [{
                    'type': 'text',
                    'value': 'Delta'
                }]
            }]
        }),
        true,
        'should return `true` when with sectioning'
    );

    t.end();
});