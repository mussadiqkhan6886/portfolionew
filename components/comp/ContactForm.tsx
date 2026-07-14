'use client';

import React, { ChangeEvent, FormEvent, useState } from 'react'
import FloatEffect from '../ui/FloatEffect';
import MagnetText from '../ui/MagnetEffect';

const ContactForm = () => {

    const [data, setData] = useState({name: "", email: "", organization: "", service: "", message: ""})
    const [loading, setLoading] = useState(false)
    const [respond, setRespond] = useState("")

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
       const {name, value} = e.target
        setData(prev => ({...prev, [name]: value}))
    }

    const submitForm = async (e:FormEvent) => {
        e.preventDefault()
        setLoading(true)
        try{
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
            })
            const result = await res.json()
            if (!res.ok) {
                setRespond(result.message);
                return;
            }
            setRespond(result.message)
            setData({
                name: "",
                email: "",
                organization: "",
                service: "",
                message: "",
            });
        }catch(err){
            if(err instanceof Error) {
                setRespond(err.message)
                console.log(err.message)
            }
        }finally{
            setLoading(false)
        }
        

    }

  return (
    <div className="w-full relative pt-30 pb-30 sm:pb-40 border-b border-gray/50">
    <form onSubmit={submitForm}>
        <div className="border-t border-gray/50 py-10 flex gap-6 sm:gap-8 w-full md:gap-10">
        <span className="inline-block mt-1 text-gray text-xs">
            01
        </span>
        <div className="w-full">
            <label className="font-[450] text-white tracking-tight text-xl md:text-2xl mb-3 block" htmlFor='name'>What&apos;s your Name?</label>
            <input name="name" value={data.name} onChange={e => handleChange(e)} autoComplete='off' id="name" type="text" placeholder="Mussadiq Khan *" className="outline-none w-full  placeholder:text-gray/70 text-white  tracking-tight text-[16px] md:text-[20px]" />
        </div>
        </div>
        <div className="border-t border-gray/50 py-10 flex gap-6 sm:gap-8 md:gap-10">
        <span className="inline-block mt-1 text-gray text-xs">
            02
        </span>
        <div className="w-full">
            <label className="font-[450] text-white tracking-tight text-xl md:text-2xl mb-3 block" htmlFor='email'>What&apos;s your Email?</label>
            <input name="email" value={data.email} onChange={e => handleChange(e)} autoComplete='off' id="email" type="email" placeholder="mussadiqkhan@gmail.com *" className="outline-none w-full  placeholder:text-gray/70 text-white  tracking-tight text-[16px] md:text-[20px]" />
        </div>
        </div>
        <div className="border-t border-gray/50 py-10 flex gap-6 sm:gap-8 md:gap-10">
        <span className="inline-block mt-1 text-gray text-xs">
            03
        </span>
        <div className="w-full">
            <label className="font-[450] text-white tracking-tight text-xl md:text-2xl mb-3 block" htmlFor='organization'>What&apos;s the name of your organization?</label>
            <input name="organization" value={data.organization} onChange={e => handleChange(e)} autoComplete='off' id="organization" type="text" placeholder="Scrupulous *" className="outline-none w-full  placeholder:text-gray/70 text-white  tracking-tight text-[16px] md:text-[20px]" />
        </div>
        </div>
        <div className="border-t border-gray/50 py-10 flex gap-6 sm:gap-8 md:gap-10">
        <span className="inline-block mt-1 text-gray text-xs">
            04
        </span>
        <div className="w-full">
            <label className="font-[450] text-white tracking-tight text-xl md:text-2xl mb-3 block" htmlFor='service'>What services are you looking for?</label>
            <input name="service" value={data.service} onChange={e => handleChange(e)} autoComplete='off' id="service" type="text" placeholder="Web Development, Optimization ... *" className="outline-none w-full  placeholder:text-gray/70 text-white  tracking-tight text-[16px] md:text-[20px]" />
        </div>
        </div>
        <div className="border-t border-gray/50 py-10 flex gap-6 sm:gap-8 md:gap-10">
        <span className="inline-block mt-1 text-gray text-xs">
            05
        </span>
        <div className="w-full">
            <label className="font-[450] text-white tracking-tight text-xl md:text-2xl mb-3 block" htmlFor='message'>Your Message</label>
            <input name="message" value={data.message} onChange={e => handleChange(e)} autoComplete='off' id="message" type="text" placeholder="Hello Mussadiq, can you help me with... *" className="outline-none w-full  placeholder:text-gray/70 text-white  tracking-tight text-[16px] md:text-[20px]" />
        </div>
        </div>
        <div>
            <FloatEffect output={[100,250]}>
            <button disabled={loading} className="disabled:opacity-60 disabled:cursor-not-allowed" type="submit">
            <MagnetText dot="no" text={loading ? "Sending ..." : "Send it!"} className="absolute w-34 h-34 sm:w-38 sm:h-38 items-center justify-center bg-ctr hover:bg-ctr-dark rounded-full bottom-0 sm:-bottom-5 right-8" />
            </button>
        </FloatEffect>
        <p className="text-border font-medium">{respond}</p>
        </div>
    </form>
    </div>
  )
}

export default ContactForm
