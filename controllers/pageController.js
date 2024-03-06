import { Trip } from '../models/trips.js';
import { Testimonial } from '../models/Testimonials.js';

const pageStart = async (req, res) => {
    // Consult of model trips
    const promiseDB = [];
    promiseDB.push(Trip.findAll({ limit: 3 }));
    promiseDB.push(Testimonial.findAll({ limit: 3 }));
    try {
        const result = await Promise.all(promiseDB);
        res.render('home', {
            page: 'Home',
            clase: 'home',
            trips: result[0],
            testimonials: result[1]
        });
    } catch (error) {
        console.error(error);
    }
}
const pageAbout = (req, res) => {
    res.render('about', {
        page: 'Sobre Nosotros'
    });
}
const pageTrips = async (req, res) => {
    //consult DB
    const trips = await Trip.findAll();

    res.render('trips', {
        page: 'Próximos Viajes',
        trips
    });
}
// show trip for slug
const pageDetailTrip = async (req, res) => {
    const { slug } = req.params;
    try {
        const tripDetail = await Trip.findOne({ where: { slug } });
        res.render('trip', {
            page: 'Información Viaje',
            tripDetail
        });
    } catch (error) {
        console.log(error);
    }

}
const pageTestimonials = async (req, res) => {
    try {
        const testimonials = await Testimonial.findAll();

        res.render('testimonials', {
            page: 'Testimoniales',
            testimonials
        });
    } catch (error) {
        console.error(error);
    }
}

export { 
    pageStart,
    pageAbout,
    pageTrips,
    pageTestimonials,
    pageDetailTrip
}