const renderIndex = (req, res) => {
  res.render('index');
};

const renderQuienesSomos = (req, res) => {
  res.render('quienesSomos');
};
const renderAllProducts = async (req, res) => {
  res.render('products/all-products');
};

const renderRegister = async (req, res) => {
  res.render('session/register');
};

export { renderIndex, renderQuienesSomos, renderAllProducts, renderRegister };
