export default function Footer() {
    return (
    <footer className="bg-blue-green text-white relative w-full p-4">
        <a href="https://www.google.com/maps/place/Avian+Sanctuary+and+Protection/@40.7180086,-111.9297854,17z/data=!4m15!1m8!3m7!1s0x87528b37ea408165:0x99ac3ce5afe66df8!2s1232+W+Parkway+Ave,+West+Valley+City,+UT+84119!3b1!8m2!3d40.7180086!4d-111.9272105!16s%2Fg%2F11j2dtnd7t!3m5!1s0x87528b37e894060d:0x758be3ce562f0b0d!8m2!3d40.7179846!4d-111.9272571!16s%2Fg%2F11g__ht5l?entry=ttu" className="underline hover:text-blue-300">1232 W Parkway Ave, West Valley City, UT 84119</a>
        <br/>   
        <a className="info-phone underline hover:text-blue-300" href="tel:8016886911">(801) 688-6911</a>
        <br/>
        <a className="info-email underline hover:text-blue-300" href="mailto:mail@asaputah.org">mail@asaputah.org</a>
        <p className="info-hours">
            Mon-Sat: 9AM-2PM
            <br/>
            Sunday: Noon-4PM
        </p>
    </footer>
    )
}