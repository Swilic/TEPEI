import React, { Fragment } from 'react';

const List = (props) => {
	const a = Object.entries(props.card).map((element) => {
		return (
            <Fragment>
                <li>{element[0]}</li>
                <li>{element[1]}</li>
            </Fragment>
        )
	});
	return <ul>{a}</ul>;
};

export default List;
