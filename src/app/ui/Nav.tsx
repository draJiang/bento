'use client'

import Image from 'next/image';

export default function Nav() {
    return (
        <header className="w-full border-b border-stone-800/10 dark:border-stone-800/60">

            <div className='m-4 md:px-8 flex items-center'>
                <div className='grow'>
                    <a href='/'>
                        <Image className='rounded-md' src='/icon256.png' width={24} height={24} alt='bento' />
                    </a>
                </div>
                <div className='flex'>
                    <a href='/posts' className='mr-6'>Blog</a>
                    <a href='/faq'>FAQ</a>
                </div>

            </div>

        </header>
    );
}
