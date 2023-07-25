"use client";

import Image from "next/image";
import Link from "next/link";
import Subscription from "../Subscription";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Instagram from "../svgs/Instagram";
import Facebook from "../svgs/Facebook";
import Twitter from "../svgs/Twitter";
import Linkedin from "../svgs/Linkedin";

const Footer = () => {
  const [reloadAnimation, setReloadAnimation] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setReloadAnimation(false);
    setReloadAnimation(true);
  }, [pathname]);

  return (
    <>
      <motion.footer
        initial={reloadAnimation ? "hidden" : "visible"}
        animate={reloadAnimation ? "visible" : "hidden"}
        variants={{
          hidden: {
            opacity: 0,
            transition: {
              velocity: 10,
            },
          },
          visible: {
            opacity: 1,
            transition: {
              velocity: 10,
            },
          },
        }}
        className="xl:max-w-screen-xl mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between gap-6 pt-24 px-4">
          <div className="text-center md:text-left">
            <div className="text-xl font-bold">
              <Image
                src="/logo.svg"
                alt="Instagram Logo"
                className="pointer m-auto"
                width={300}
                height={90}
                priority
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 md:gap-14">
            <div>
              <div className="text-md text-purple-700 uppercase">Website</div>
              <div className="flex flex-col">
                <Link href="/" className=" hover:text-purple-700">
                  inicio
                </Link>
                <Link href="/nosotros" className=" hover:text-purple-700">
                  nosotros
                </Link>
                <Link href="/conectate" className=" hover:text-purple-700">
                  conectate
                </Link>
                <Link href="/contacto" className=" hover:text-purple-700">
                  contacto
                </Link>
              </div>
            </div>

            <div>
              <div className="text-md text-purple-700 uppercase">Pronto</div>
              <div>
                <div className="">Blog</div>
                <div className="">Escuela conecta</div>
                <div className="">Bootcamp</div>
              </div>
            </div>

            <div className=" flex flex-col">
              <div className="text-md  text-purple-700 uppercase">Aliados</div>

              <a
                href="https://www.iopenerinstitute.com/happiness-at-work-what"
                className=" hover:text-purple-700"
              >
                IOpener Institute
              </a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <div className="text-md text-purple-700 uppercase">Contacto</div>
            <div>
              <div>
                {/* <img src="/path/to/img" alt="icon" className="h-6" /> */}
                <div className="">info@conectatuproposito.com</div>
              </div>
              <div>
                {/* <img src="/path/to/img" alt="icon" className="h-6" /> */}
                <div className="">(+57) 310 767 52 03</div>
              </div>
              <div>
                {/* <img src="/path/to/img" alt="icon" className="h-6" /> */}
                <div className="">Envigado - Colombia</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 pb-16 px-4 ">
          <div></div>
          <div></div>

          <Subscription />

          <div className="mt-8 md:mt-0">
            <div className="mb-2 uppercase text-purple-500">
              Síguenos en redes sociales
            </div>

            <div className="flex flex-row gap-12 text-black transition-all">
              <a href="" target="_blank" className="hover:text-gray-200 w-6">
                <Instagram className="fill-black hover:fill-pink-300" />
              </a>

              <a href="" target="_blank" className="hover:text-gray-200 w-6">
                <Facebook className="fill-black hover:fill-pink-300" />
              </a>

              <a href="" target="_blank" className="hover:text-gray-200 w-6">
                <Twitter className="fill-black hover:fill-pink-300" />
              </a>

              <a href="" target="_blank" className="hover:text-gray-200 w-6">
                <Linkedin className="fill-black hover:fill-pink-300" />
              </a>
            </div>
          </div>
        </div>
      </motion.footer>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
          },
        }}
        className="flex items-center justify-center h-20 w-full  bg-gradient-to-r from-blue-200 via-blue-400 to-purple-700"
      >
        ©2023 Conecta tu propósito. All rights reserved
      </motion.div>

      <div className="fixed bottom-5 right-2 w-16">
        <motion.div
          initial={reloadAnimation ? "hidden" : "visible"}
          animate={reloadAnimation ? "visible" : "hidden"}
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
            },
          }}
        >
          <a
            target="_blank"
            href="https://wa.me/573107675203?text=Estoy%20interesado%20en%20su%20contacto"
          >
            <Image
              src="/whatsapp.png"
              alt="Whastapp Logo"
              className="pointer m-auto"
              width={300}
              height={90}
              priority
            />
          </a>
        </motion.div>
      </div>
    </>
  );
};

export default Footer;
