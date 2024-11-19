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
      role: 'OutReach/Tech',
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
      <div>
        <h1>Members</h1>
        <div className='flex '>
          {members.map((member) => (
            <div key={member.id} className='border-2'>
              <Image src={member.image} alt={member.name} width={150} height={150} className='bg-gray-400'/>
              <h2>{member.name}</h2>
              <p>{member.role}</p>
              <p>{member.bio}</p>
              <p>{member.grade}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}