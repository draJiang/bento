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
                <div className='flex flex-row gap-4'>
                    <a href='/posts'>Blog</a>
                    <a href='/faq'>FAQ</a>
                    <a href='https://jiangzilong.notion.site/Bento-public-wiki-174596b28b3480e8aad2fb9fb7a9cb71?pvs=4' target='__blank'>Wiki↗</a>
                </div>

            </div>

        </header>
    );
}
