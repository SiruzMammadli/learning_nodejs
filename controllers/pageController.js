export function getIndexPage(req, res) {
  res.status(200).render("index");
}

export function getLoginPage(req, res) {
    res.status(200).render("login")
}
