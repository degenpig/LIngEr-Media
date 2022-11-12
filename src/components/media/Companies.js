import Reac, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid'
import response from '../../utils/demo/prices'
import { CompFirstIcon } from '../../icons'

function Companies() {
    return (
        <>
            <div className="flex flex-col bg-story w-full md:px-28 px-4 my-24">
                <div className="flex flex-col md:space-y-8 space-y-2">
                    <div className="text-center md:text-[2.75rem] text-[1.75rem] text-gray-800 font-graphiksemibold">
                        <span>You're in good company</span>
                    </div>
                    <div className="text-center md:text-[1.3125rem] md:mt-0 mt-4 text-base text-gray-800 font-normal">
                        <span>Trusted by leaders at some of the world's most inspired organizations</span>
                    </div>
                    <div className="flex flex-row justify-center">
                        <CompFirstIcon width="488" height="52"></CompFirstIcon>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Companies