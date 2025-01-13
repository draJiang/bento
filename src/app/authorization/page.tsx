'use client'

import { useEffect,Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

export default function Authorization() {
    const searchParams = useSearchParams();
    const code = searchParams.get('code'); // Replace 'yourParamName' with the actual parameter name you want to retrieve
    
    useEffect(()=>{
        
        console.log(code); // You can use this value as needed
        if (code) {
            window.open(`bento://notion-authorization?${code}`, '_blank'); // Replace with the actual URL you want to open
        }

    },[code])

    return (
        <Suspense fallback={<div>loading...</div>}>
            <main className= "p-4 mt-2 md:mt-14 w-full max-w-2xl" >
                <div>
                    authorization
                </div>
            </main>
        </Suspense>
    );
}