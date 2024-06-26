import React from 'react'

export default function Response() {
    return (
        <div className="w-full px-4 my-2">
            <div className="max-w-2xl flex gap-x-2 sm:gap-x-4">
                <span className="flex-shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-gray-600">
                    <span className="text-sm font-medium text-white leading-none">Bot1</span>
                </span>

                <div className="grow mt-2 space-y-3">
                    <p className="text-gray-800 ">
                        Hello Anas!
                        Nice to meet you. How can I help you today?
                    </p>
                </div>
            </div>
        </div>
    )
}
