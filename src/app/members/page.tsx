import React from 'react'
import Image from 'next/image'
import gray from '/public/gray.png'

export default function page() {

  const members = [
    {
    id: 1,
    name: 'Maureen Montes',
    role: 'President',
    bio: 'I am the president of the club',
    image: '/public/gray.png',
    grade: 'Junior',
    },
    {
      id: 2,
      name: 'Arjun Parujanwala',
      role: 'Outreach/Tech',
      bio: 'I am the outreach and tech person',
      image: '/public/gray.png',
      grade: 'Sophomore',
    },
    {
      id: 3,
      name: 'Ashley',
      role: 'Officer',
      bio: 'I am an officer',
      image: '/public/gray.png',
      grade: 'Gooner',
    },
    {
      id: 4,
      name: 'Diana',
      role: 'Officer',
      bio: 'I am an officer',
      image: '/public/gray.png',
      grade: 'Gooner',
    },
    {
      id: 5,
      name: 'Luna',
      role: 'Officer',
      bio: 'I am an officer',
      image: '/public/gray.png',
      grade: 'Gooner',
    },
    {
      id: 6,
      name: 'Nathalie',
      role: 'Officer',
      bio: 'I am an officer',
      image: '/public/gray.png',
      grade: 'Gooner',
    },
    {
      id: 7,
      name: 'Tarnam',
      role: 'Officer',
      bio: 'I am an officer',
      image: '/public/gray.png',
      grade: 'Gooner',
    },

  ]
  return (
    <main>
      <div className="flex justify-center">
        <div className="w-full max-w-6xl p-4">
          <h1 className="text-center text-4xl font-bold mb-8">Members</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {members.map((member) => (
              <div key={member.id} className="border-2 w-72 h-96 mt-10 mx-auto rounded-3xl flex flex-col items-center">
                <div className="flex justify-center items-center w-full h-48">
                  <Image src={member.image} alt={member.name} width={150} height={150} className="bg-gray-400 rounded-full"/>
                </div>
                <h2 className="text-center text-xl font-semibold mt-4">{member.name}</h2>
                <p className="text-center">{member.role}</p>
                <p className="text-center">{member.bio}</p>
                <p className="text-center">{member.grade}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}