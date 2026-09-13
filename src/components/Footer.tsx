import React from "react";
import Footerpic from "../photos/logo-text.png"

interface FooterColumnProps {
  title: string;
  links: string[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({
  title,
  links,
}) => {
  return (
    <div>
      <h3 className="mb-3 text-[10px] font-semibold uppercase tracking-wide text-slate-800">
        {title}
      </h3>

      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-[11px] text-slate-400 transition-colors hover:text-pink-500"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-6xl px-6">

       

        <div className="grid grid-cols-1 gap-10 py-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-16">

         

          <div className="max-w-sm">
            <img src={Footerpic} alt="" />

            <p className="mt-3 max-w-[280px] text-[10px] leading-5 text-slate-400">
              Curated tools, technologies, and resources
              for developers building modern software.
            </p>


            <div className="mt-4 flex items-center gap-4">
              <a
                href="#"
                className="text-[10px] text-slate-500 transition-colors hover:text-pink-500"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-[10px] text-slate-500 transition-colors hover:text-pink-500"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-[10px] text-slate-500 transition-colors hover:text-pink-500"
              >
                LinkedIn
              </a>
            </div>
          </div>


          <FooterColumn
            title="Product"
            links={[
              "Home",
              "Technologies",
              "Projects",
            ]}
          />


          <FooterColumn
            title="Company"
            links={[
              "About",
              "Contact",
              "Careers",
            ]}
          />


          <FooterColumn
            title="Legal"
            links={[
              "Privacy Policy",
              "Terms of Service",
            ]}
          />
        </div>

      

        <div
          className="
            flex
            flex-col
            gap-3
            border-t
            border-slate-100
            py-5
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p className="text-[10px] text-slate-400">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-[10px] text-slate-400 transition-colors hover:text-pink-500"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-[10px] text-slate-400 transition-colors hover:text-pink-500"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
