exports.ok = (result, res) => {
    var response = {
        'status':200,
        'result': result
    }
    res.json(response);
    res.end();
}

exports.error = (errorMessage, res) => {
    var response = {
        'status':400,
        'errorMessage':errorMessage
    } 
    res.json(response).status(400);
    res.end();
}