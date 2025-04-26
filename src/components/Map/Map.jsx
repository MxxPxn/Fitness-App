export const Map = () => {
    return (

        <div className="google-map">
            <iframe 
                title="Holbrook Park Location"
                id="contact" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24197.33190890745!2d-80.85539038242901!3d35.42672325534768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8856a867945648d1%3A0xc7c40444c666544a!2sHolbrook%20Park!5e0!3m2!1sen!2sus!4v1723861093734!5m2!1sen!2sus" 
                width="80%" 
                height="700" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    )
}