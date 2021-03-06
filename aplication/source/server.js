import http from 'http';
import React from 'react';
import { renderToString } from 'react-dom/server';

function requestHandler(request, response) {
	const html = renderToString(
		React.DOM.h1(null, 'Hola')
	);
	response.write(html);
	response.end();
}

const server = http.createServer(requestHandler);

server.listen(8080);