import { Router } from 'express';
import { 
    pageStart, 
    pageAbout, 
    pageTrips, 
    pageTestimonials, 
    pageDetailTrip
} from '../controllers/pageController.js'; 
import { saveTestimonials } from '../controllers/testimonialController.js';

const router = Router();

router.get('/', pageStart);

router.get('/about', pageAbout);

router.get('/trips', pageTrips);

router.get('/trip/:slug', pageDetailTrip);

router.get('/testimonials', pageTestimonials);

router.post('/testimonials', saveTestimonials);


export default router;