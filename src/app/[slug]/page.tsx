import { NextPage } from 'next'
import React from 'react'
import { links } from '../data/links'

interface IProps {
    params: {
        slug: string
    }
}

export const generateStaticParams = async () => {
    
    return links.map(link => {
        slug: link.href.replace('/', '');
    })
}

const SportPage:NextPage<IProps> = ({params}) => {
    console.log(params)
  return (
    <div>{params.slug}</div>
  )
}

export default SportPage