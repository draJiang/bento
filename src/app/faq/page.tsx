// 'use client'

import type { Metadata } from "next";
import { getAllPosts } from "../lib/api"
import Link from 'next/link';
import Tag from '../ui/Tag';
import PostList from '@/app/ui/PostList'

export const metadata: Metadata = {
    title: "faq-Bento",
    description: "Understand potential issues and solutions during product use.",
};

export default function Faq() {

    const posts = getAllPosts("_faqs")

    return (
        <main className='p-4 mt-2 md:mt-14 w-full max-w-2xl'>
            <PostList href='faq' posts={posts} showTag={true} />
        </main>

    );
}




