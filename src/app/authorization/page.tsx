'use client'

import { useEffect,Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

export default function Authorization() {

    return (
        <Suspense fallback={<div>loading...</div>}>
            <main className="p-4 mt-2 md:mt-14 w-full max-w-2xl" >
                <AuthorizationUI/>
            </main>
        </Suspense>
    );

}
// 这里是一个注释，说明Authorization组件的功能和用途
function AuthorizationUI(){

    const searchParams = useSearchParams();
    const code = searchParams.get('code'); 

    useEffect(() => {

        console.log(code); // You can use this value as needed
        if (code) {
            window.open(`bento://notion-authorization?code=${code}`, '_blank'); // Replace with the actual URL you want to open
        }

    }, [code])

    return (
        <div>
            authorization
        </div>
    );

}