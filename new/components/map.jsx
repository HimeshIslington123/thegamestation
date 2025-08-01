const Location = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      <h1 className="text-2xl mb-6 font-semibold">Our Location</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0782885879908!2d85.30602487580781!3d27.714868976178277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19000c2c6f43%3A0xc875900a43bb3ac8!2sGame%20Station%20by%20Vape%20Station!5e0!3m2!1sen!2snp!4v1754024992747!5m2!1sen!2snp"
        width="100%"
        height="450"
        style={{ border: 0, maxWidth: 800 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Game Station Location"
      ></iframe>
    </div>
  );
};

export default Location;
