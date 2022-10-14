import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function AllergyInformation() {
    return (
        <>
            <Navbar />
            <div className="mx-5 my-5">
                <div className="row">
                    <h1>Allergy Information</h1>
                    <p className="pt-2">
                        ALLERGY INFORMATION
                        <br /><br />
                        Read the FAQs below for more information about Happy Pizza's food allergy policies.
                        <br /><br />
                        What if I have food allergy?
                        <br /><br />
                        If you have food allergy, please contact us directly before you place your order. We strongly advise that you also contact us directly to confirm any requests made online.
                        <br /><br />
                        How do we make sure the food allergy information provided is accurate and up to date?
                        <br /><br />
                        We do not want to put anyone?s health at risk so we recommend that you speak to us directly and we will provide you with the most accurate and up to date information about our food and the preparation of it.
                        <br /><br />
                        How can I contact the takeaway directly?
                        <br /><br />
                        Our contact details are on the website, under the Contact Us page. Here you will find our telephone number, address and a form that will send an email to us.
                        <br /><br />
                        Doesn't the law require all food businesses to provide information in regards to food allergies?
                        <br /><br />
                        Please contact us directly for any information in regards to food allergies, It is our responsibility to provide this information to consumers.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AllergyInformation
