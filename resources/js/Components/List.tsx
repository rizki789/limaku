import React from 'react';

function List(props) {
    return (
        <div>
            {props.children}
        </div>
    );
}

function Item(props) {
    return (
        <div className={`list-unstyled px-sm-2${' ' + props.className}`}>
            {props.children}
        </div>
    );
}

List.Item = Item;

export default List;
