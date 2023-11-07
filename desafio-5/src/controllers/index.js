const renderIndex = (req, res) => {
  res.render('index');
};

const renderQuienesSomos = (req, res) => {
  res.render('quienesSomos');
};

export { renderIndex, renderQuienesSomos };
