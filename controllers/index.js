function showHomePage(req, res) {
    res.render('../views/index.ejs', {name: 'This is my Home Page'})
}

module.exports = {
    showHomePage
}