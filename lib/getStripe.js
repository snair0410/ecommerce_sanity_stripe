import { loadStripe } from '@stripe/stripe-js'

let stripePromise

const getStripe = () => {
    if(!stripePromise) {
        stripePromise = 
        loadStripe('pk_test_51L1QLGSA9IW09uNB2UYZxUoU1BnT7tYHM8wJbt79zhsLhSVLeS8Z3XNjoW7zMJpEikfJeUH7i8sR2JyOrNMNpHTi00Pp0pCLNU')
    }

    return stripePromise
}

export default getStripe
