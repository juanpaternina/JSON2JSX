import React from 'react';

let registeredComponents = {};

export const renderJSON = elements =>
	React.createElement(
		elements.component,
		elements.props,
		elements.children ? elements.children : (elements.childs || []).map(i => renderJSON(i)),
	);

const childs = childs => {
	if (childs && childs.length > 0) {
		return childs.map(child => {
			return this.renderJSON(child);
		});
	}
	return null;
};

export const registerComponent = (id, component) => {
	registeredComponents[id] = component;
};
