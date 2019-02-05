
import express from 'express';
import Auth from '../controllers/authController';
import Office from '../controllers/officeController';
import Party from '../controllers/partyController';
import authValidation from '../middlewares/authValidator';
import verifyToken from '../middlewares/verifyToken';
import verifyAdmin from '../middlewares/verifyAdmin';


const router = express.Router();

router.get('/', (req, res) => res.json('Successful!, Welcome to Politico API v1!'));


router.post('/auth/signup', authValidation.signup, Auth.signUp);
router.post('/auth/login', authValidation.login, Auth.login);
router.post('/parties', verifyToken, Party.createParty);
router.get('/parties', verifyToken, Party.getAllParties);
router.get('/parties/:id', verifyToken, Party.getOneParty);
router.get('/offices', verifyToken, Office.getOffices);
router.get('/offices/:id', verifyToken, Office.getOneOffice);
router.post('/offices', verifyToken, Office.createOffice);
router.patch('/parties/:id', verifyToken, verifyAdmin, Party.editParty);
router.delete('/parties/:id', verifyToken, verifyAdmin, Party.deleteParty);
router.post('/offices/:id/register', verifyToken, Office.registerCandidate);
router.use('*', (req, res) => res.json({ status: 404, error: 'Route does not exist' }));


export default router;
