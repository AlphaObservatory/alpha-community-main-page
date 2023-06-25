
import Image from 'next/image';
import Container from "./container";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";

export default () => (
  <footer classNameName="bg-slate-50 text-center text-neutral-600">
    <Container>
      <div className="text-center pt-10">
        <div className="flex justify-center gap-6">
          <div>
            <h6
              className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Social Media
            </h6>

            <div className='flex gap-10'>
              <a href='https://www.facebook.com/alphacommunityworld' classNameName="mx-3 font-bold hover:underline px-12 lg:px-8" target="_blank" rel="noopener noreferrer">
                <Image
                  priority
                  src={facebook}
                  alt="Facebook"
                />
              </a>


              <a href="https://www.instagram.com/alphacommunity_world/" classNameName="mx-3 font-bold hover:underline px-12 lg:px-8" target="_blank" rel="noopener noreferrer">
                <Image
                  priority
                  src={instagram}
                  alt="Instagram"
                />
              </a>
            </div>
          </div>

          <div>
            <h6
              className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>

            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5">
                <path
                  d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path
                  d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              <a href="mailto:alphaobservatory@proton.me">alphaobservatory@proton.me</a>
            </p>

          </div>
        </div>
      </div>

      <div className="pb-6 text-center">
        <span>© 2023 Copyright: Alpha Community</span>
      </div>
    </Container>

  </footer>
)
