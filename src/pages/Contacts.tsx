import { useNavigate } from "react-router"

interface PopHandler {
    popHandler: (message:string) => void
}

export default function Contacts( {popHandler}:PopHandler ) {
    const navigate = useNavigate();


    return(
<div className="w-full min-h-screen bg-white px-4 py-12 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Get in Touch</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              Fill out the form below or visit us at our office.
            </p>

            <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                const name = formData.get("name");
                popHandler(`Thanks for reaching out, ${name}! Our team will contact you ASAP!`)

                setTimeout(() => {
                    navigate('/')
                },2000)
                } } className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Google Map */}
          <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23456.003859020784!2d27.234567640660302!3d42.703710554404196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a67d1235fd61f7%3A0xd02df78ed5d97238!2zODUwMCDQkNC50YLQvtGB!5e0!3m2!1sbg!2sbg!4v1752698361686!5m2!1sbg!2sbg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    )
}