export const get404 = (req, res) => {
    res.render("404.ejs", {
        title: 'not found',
        path: null
    });
  }