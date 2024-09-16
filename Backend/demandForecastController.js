const { PythonShell } = require('python-shell');
const path = require('path');

// Predict future demand based on input data (season, holiday, past_sales)
exports.predictDemand = (req, res) => {
  const { season, holiday, past_sales } = req.body;

  let options = {
    mode: 'text',
    pythonOptions: ['-u'],
    scriptPath: path.join(__dirname, '../ml/'),
    args: [season, holiday, past_sales]
  };

  PythonShell.run('predict.py', options, (err, results) => {
    if (err) throw err;
    res.status(200).json({ predicted_demand: results[0] });
  });
};
