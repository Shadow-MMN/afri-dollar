import { Router } from 'express';

import { StellarController } from '../controllers/stellar.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const stellarRouter = Router();

stellarRouter.get('/balances/:publicKey', authMiddleware, (req, res, next) => {
  StellarController.getBalances(req, res).catch(next);
});

stellarRouter.get('/transactions/:publicKey', authMiddleware, (req, res, next) => {
  StellarController.getTransactions(req, res).catch(next);
});

stellarRouter.post('/fund/:publicKey', authMiddleware, (req, res, next) => {
  StellarController.fundAccount(req, res).catch(next);
});

export default stellarRouter;
