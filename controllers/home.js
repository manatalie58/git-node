const homeController = (req, res, next) => {
    res.render("index", { title: "Home" });
};

module.exports = homeController;
