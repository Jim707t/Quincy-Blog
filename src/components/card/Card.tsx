import Link from 'next/link';
import React from 'react'
import { Metadata } from "../../utils/MetaData";

export default function Card(props: Metadata) {
  return (
    <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-300 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 italic">
                <span className="font-bold text-sm ">
                  Php
                </span>
              </div>
              <h2 className="text-lg  font-medium title-font mb-2"><Link href={`/posts/${props.slug}`}>{props.title}</Link></h2>
              <p className="leading-relaxed text-base">{props.subtitle}</p>

              <div className="text-center mt-2 leading-none flex justify-between w-full">
                <span className=" mr-3 inline-flex items-center leading-none text-sm  py-1 ">
                  <svg className=" fill-current w-4 h-4 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"/></svg>               
                  {props.date}
                </span>
                <span className=" inline-flex items-center leading-none text-sm">
                  <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd">
                    <path fill="#D8D8D8" d="M9.2 6.583v11.08h3.5V6.583zm6.4 11.084h3.5V3h-3.5z"/>
                    <path fill="#667EEA" d="M2.6 17.667h3.5v-7.334H2.6z"/></g></svg>
                    Débutant
                </span>
              </div>
            </div>
          </div>
  )
}
