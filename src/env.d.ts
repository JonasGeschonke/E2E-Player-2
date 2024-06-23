/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />

export interface Social {
    url: string,
    icon: string
}

export interface Member {
    name: string,
    role: string,
    img: string,
    socials: Social[],
    portrait: boolean
}