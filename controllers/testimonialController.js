import { Testimonial } from '../models/Testimonials.js';

const saveTestimonials = async (req, res) => {

    //validate fields
    const { name, email, message } = req.body;
    const errors = [];

    if (name.trim() === '') {
        errors.push({ message: 'El nombre es requerido'});
    } else if (email.trim() === '') {
        errors.push({ message: 'El correo es requerido'});
    } else if (message.trim() === '') {
        errors.push({ message: 'El mensaje es requerido'});
    } 

    if (errors.length > 0) {
        //consult the testimonials
        const testimonials = await Testimonial.findAll();

        //show view with errors
        res.render('testimonials', {
            page: 'Testimoniales',
            testimonials,
            errors,
            name,
            email,
            message
        });
    } else {
        //save in the db
        try {
            await Testimonial.create({
                name,
                email,
                message
            });
            res.redirect('/testimonials');
        } catch (error) {
            console.error(error);
        }
    }

}

export { 
    saveTestimonials 
}