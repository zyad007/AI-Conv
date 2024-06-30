import React from 'react'
import Markdown from 'react-markdown'

export default function Response({text, sender}: {text: string, sender: string}) {
    return (
        <div className="w-full px-4 my-2">
            <div className="max-w-2xl flex gap-x-2 sm:gap-x-4">
                <span className="flex-shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-gray-600">
                    <span className="text-sm font-medium text-white leading-none">{sender}</span>
                </span>

                <div className="grow mt-2 space-y-3">
                    <p className="response">
                        <Markdown>
                            {text}
                        </Markdown>
                    </p>
                </div>
            </div>
        </div>
    )
}
