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
  const currentLink = links.find(link => link.href == `/${params.slug}`)
    
  return (
    <div>{currentLink!.name}</div>
  )
}

export default SportPage