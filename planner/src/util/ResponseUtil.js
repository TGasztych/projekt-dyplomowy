const handleResponse = async (res, shouldReturnValue, performOperation, ...args) => {
    try {
        const result = await performOperation(...args);
        if (!result && shouldReturnValue) {
            res.status(404);
            res.send("Entity not found.");
        } else {
            res.send(result);
        }
    } catch (err) {
        console.error(err)
        res.status(500);
        res.send(err.message);
    }
}

module.exports = {
    handleResponse
}