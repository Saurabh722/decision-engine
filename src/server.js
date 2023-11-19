import express from 'express';
import cors from 'cors';

import config from './utility/config.js';
import Locale from './utility/Locale.js';

const app = express();

app.use(cors(config.corsOptions));
app.use(express.json());

app.post('/get-decision', (req, res) => {
  const { loanAmount } = req.body.businessDetails;
  const { preAssessment } = req.body;

  console.log(loanAmount, preAssessment);

  if (preAssessment === 100) {
    res.status(200).json({
      data: Locale.fullApproveMsg(loanAmount),
      type: 'success',
    });
  } else if (preAssessment === 60) {
    res.status(200).json({
      data: Locale.sixtyPercentApproveMsg(loanAmount),
      type: 'success',
    });
  } else {
    res.status(200).json({
      data: Locale.loanDeclineMsg(loanAmount),
      type: 'error',
    });
  }
});

app.get('/', (req, res) => {
  res.send('Decision Engine API running 🥳');
});

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});