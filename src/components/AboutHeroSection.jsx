import aboutImage from "../images/about.png";

function AboutHeroSection() {
    return (
        <section className="bg-[#F7F3EB] min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto w-full px-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="inline-block bg-white rounded-full px-5 py-2 shadow-sm mb-5">
                            <p className="text-[#2166D1] font-medium tracking-wide">
                                About the NIGCOMSAT Accelerator
                            </p>
                        </div>

                        <h1 className="text-[72px] leading-[80px] font-bold text-[#2166D1] mb-8">
                            Building Nigeria's
                            <br />
                            Next Generation
                            <br />
                            of Space Innovators
                        </h1>

                        <p className="text-gray-700 text-xl leading-9 max-w-xl">
                            Infrastructure alone doesn't build an ecosystem. The
                            NIGCOMSAT Accelerator empowers founders with mentorship,
                            strategic partnerships and access to national satellite
                            infrastructure, helping innovative ideas grow into impactful
                            businesses.
                        </p>
                    </div>

                    <div>
                        <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-50"></div>

                        <img
                          src={aboutImage}
                          alt="NIGCOMSAT Accelerator"
                          className="relative w-full h-[650px] object-cover rounded-[40px] shadow-2xl"
                        />
                    </div>

                </div>

            </div>

        </section>
    );
}

export default AboutHeroSection
